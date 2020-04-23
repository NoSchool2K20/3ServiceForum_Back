'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Express = require("bs-express/src/Express.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Logger$3ServiceForum = require("../logger/Logger.bs.js");

var welcome = Express.Middleware.from((function (_next, _req) {
        var partial_arg = Json_encode.object_(/* :: */[
              /* tuple */[
                "text",
                "Welcome to 3ServiceForum API"
              ],
              /* [] */0
            ]);
        return (function (param) {
            return Express.$$Response.sendJson(partial_arg, param);
          });
      }));

var logRequest = Express.Middleware.from((function (next, req) {
        Logger$3ServiceForum.info(Express.$$Request.ip(req) + (" " + (Express.$$Request.methodRaw(req) + (" ressource " + Express.$$Request.path(req)))));
        return Curry._1(next, Express.Next.middleware);
      }));

var badRessource = Express.Middleware.from((function (_next, _req, rep) {
        return Express.$$Response.sendStatus(/* NotFound */23)(rep);
      }));

exports.welcome = welcome;
exports.logRequest = logRequest;
exports.badRessource = badRessource;
/* welcome Not a pure module */
