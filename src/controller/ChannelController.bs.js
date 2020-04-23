'use strict';

var Express = require("bs-express/src/Express.js");
var ChannelsRepository$3ServiceForum = require("../repository/ChannelsRepository.bs.js");

var getAll = Express.PromiseMiddleware.from((function (_next, req, rep) {
        return ChannelsRepository$3ServiceForum.Channels.getAll(/* () */0).then((function (parcoursJson) {
                      return Promise.resolve(Express.$$Response.sendJson(parcoursJson, Express.$$Response.setHeader("Status", "200", rep)));
                    }));
      }));

var Channels = {
  getAll: getAll
};

exports.Channels = Channels;
/* getAll Not a pure module */
