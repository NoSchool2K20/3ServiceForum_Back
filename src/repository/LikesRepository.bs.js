'use strict';

var Likes$3ServiceForum = require("../entity/Likes.bs.js");
var DbConnexion$3ServiceForum = require("./db_connector/DbConnexion.bs.js");

function $$delete(idMessage, auteur) {
  var likes = Likes$3ServiceForum.Likes.make(idMessage, auteur);
  return DbConnexion$3ServiceForum.Dbconnexion.knex.raw("DELETE FROM forum_likes where idmessage = ? and auteur = ?", /* tuple */[
                Likes$3ServiceForum.Likes.getIdMessage(likes),
                Likes$3ServiceForum.Likes.getAuteur(likes)
              ]).then((function (param) {
                return Promise.resolve(/* () */0);
              }));
}

function deleteAllLikesOfAMessage(idMessage) {
  var likes = Likes$3ServiceForum.Likes.make(idMessage, "auteur");
  return DbConnexion$3ServiceForum.Dbconnexion.knex.raw("DELETE FROM forum_likes where idmessage = ? ", Likes$3ServiceForum.Likes.getIdMessage(likes)).then((function (param) {
                return Promise.resolve(/* () */0);
              }));
}

function isLikedByTheUser(idMessage, auteur) {
  var likes = Likes$3ServiceForum.Likes.make(idMessage, auteur);
  return DbConnexion$3ServiceForum.Dbconnexion.knex.raw("select count(idmessage) FROM forum_likes where idmessage = ? and auteur = ? ", /* tuple */[
                Likes$3ServiceForum.Likes.getIdMessage(likes),
                Likes$3ServiceForum.Likes.getAuteur(likes)
              ]).then((function (param) {
                return Promise.resolve(/* () */0);
              }));
}

function create(idMesssage, auteur) {
  var likes = Likes$3ServiceForum.Likes.make(idMesssage, auteur);
  return DbConnexion$3ServiceForum.Dbconnexion.knex.raw("INSERT INTO forum_likes VALUES (? , ?)", /* tuple */[
                Likes$3ServiceForum.Likes.getIdMessage(likes),
                Likes$3ServiceForum.Likes.getAuteur(likes)
              ]).then((function (param) {
                return Promise.resolve(/* () */0);
              }));
}

var Likes = {
  $$delete: $$delete,
  deleteAllLikesOfAMessage: deleteAllLikesOfAMessage,
  isLikedByTheUser: isLikedByTheUser,
  create: create
};

exports.Likes = Likes;
/* DbConnexion-3ServiceForum Not a pure module */
