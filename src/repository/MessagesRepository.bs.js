'use strict';

var List = require("bs-platform/lib/js/list.js");
var Messages$3ServiceForum = require("../entity/Messages.bs.js");
var DbConnexion$3ServiceForum = require("./db_connector/DbConnexion.bs.js");
var LikesRepository$3ServiceForum = require("./LikesRepository.bs.js");
var MessagesForFront$3ServiceForum = require("../entity/MessagesForFront.bs.js");
var MessagesForFrontQuery$3ServiceForum = require("../entity/MessagesForFrontQuery.bs.js");

function getAllByCours(cours, auteur) {
  return DbConnexion$3ServiceForum.Dbconnexion.knex.raw("select res11.idmessage, texte, dateenvoi, idcours, auteur::text, nblikes::integer, coalesce(isliked,0)::integer as isliked from (\n                select idmessage, texte, dateenvoi, idcours, auteur, coalesce(count(idmessageLike),0) as nblikes\n                from (\n                select fm.idmessage, texte,  TO_CHAR(dateenvoi,'DD/MM/YYYY HH24:MI:SS') as dateenvoi, idcours, fm.auteur, fl.idmessage as idmessageLike, coalesce(fl.auteur,0) as auteurLike\n                from forum_messages fm\n                left join forum_likes fl on fm.idmessage = fl.idmessage \n                where fm.idcours = ? ) res1\n                group by idmessage, texte, dateenvoi, idcours, auteur ) res11\n                full join \n                (select count(fl.auteur) as isliked, fl.idmessage \n                from forum_messages fm \n                left join forum_likes fl on fm.idmessage = fl.idmessage \n                where fm.idcours = ? and fl.auteur = ? \n                group by fl.idmessage ) res2 on res11.idmessage = res2.idmessage order by dateenvoi asc", /* tuple */[
                cours,
                cours,
                auteur
              ]).then((function (results) {
                return Promise.resolve(MessagesForFront$3ServiceForum.MessagesForFrontlist.toJson(List.map((function (messages) {
                                      return MessagesForFront$3ServiceForum.MessagesForFront.make(MessagesForFront$3ServiceForum.MessagesForFront.getIdMessage(messages), MessagesForFront$3ServiceForum.MessagesForFront.getTexte(messages), MessagesForFront$3ServiceForum.MessagesForFront.getDateEnvoi(messages), MessagesForFront$3ServiceForum.MessagesForFront.getIdCours(messages), MessagesForFront$3ServiceForum.MessagesForFront.getAuteur(messages), MessagesForFront$3ServiceForum.MessagesForFront.getNbLikes(messages), MessagesForFront$3ServiceForum.MessagesForFront.isLiked(messages));
                                    }), MessagesForFrontQuery$3ServiceForum.MessagesForFrontQuery.getRows(MessagesForFrontQuery$3ServiceForum.MessagesForFrontQuery.fromJson(results)))));
              }));
}

function deleteMessage(idMessage) {
  var messages = Messages$3ServiceForum.Messages.make(idMessage, "texte", new Date().toISOString(), "idCours", "auteur", 0);
  LikesRepository$3ServiceForum.Likes.deleteAllLikesOfAMessage(idMessage);
  return DbConnexion$3ServiceForum.Dbconnexion.knex.raw("DELETE FROM forum_messages where idmessage = ?", Messages$3ServiceForum.Messages.getIdMessage(messages)).then((function (param) {
                return Promise.resolve(/* () */0);
              }));
}

function create(texte, idCours, auteur) {
  var messages = Messages$3ServiceForum.Messages.make(0, texte, new Date().toISOString(), idCours, auteur, 0);
  return DbConnexion$3ServiceForum.Dbconnexion.knex.raw("INSERT INTO forum_messages VALUES ( (select max(idMessage)+1 from forum_messages) , ? , ? , ? , ?)", /* tuple */[
                Messages$3ServiceForum.Messages.getTexte(messages),
                Messages$3ServiceForum.Messages.getDateEnvoi(messages),
                Messages$3ServiceForum.Messages.getIdCours(messages),
                Messages$3ServiceForum.Messages.getAuteur(messages)
              ]).then((function (param) {
                return Promise.resolve(/* () */0);
              }));
}

var Messages = {
  getAllByCours: getAllByCours,
  deleteMessage: deleteMessage,
  create: create
};

exports.Messages = Messages;
/* DbConnexion-3ServiceForum Not a pure module */
