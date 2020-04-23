'use strict';

var Knex = require("bs-knex/src/Knex.bs.js");
var List = require("bs-platform/lib/js/list.js");
var Channels$3ServiceForum = require("../entity/Channels.bs.js");
var DbConnexion$3ServiceForum = require("./db_connector/DbConnexion.bs.js");

function create(coursname) {
  var channels = Channels$3ServiceForum.Channels.make(0, coursname);
  return DbConnexion$3ServiceForum.Dbconnexion.knex.raw("INSERT INTO forum_channels (coursname) VALUES (?)", Channels$3ServiceForum.Channels.getCoursName(channels)).then((function (param) {
                  return Promise.resolve(/* () */0);
                })).catch((function (param) {
                return Promise.resolve(/* () */0);
              }));
}

function getAll(param) {
  return Knex.fromTable("forum_channels", DbConnexion$3ServiceForum.Dbconnexion.knex).then((function (results) {
                return Promise.resolve(Channels$3ServiceForum.Channelslist.toJson(List.map((function (channels) {
                                      return Channels$3ServiceForum.Channels.make(Channels$3ServiceForum.Channels.getId(channels), Channels$3ServiceForum.Channels.getCoursName(channels));
                                    }), Channels$3ServiceForum.Channelslist.fromJson(results))));
              }));
}

var Channels = {
  create: create,
  getAll: getAll
};

exports.Channels = Channels;
/* DbConnexion-3ServiceForum Not a pure module */
