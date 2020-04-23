'use strict';

var Express = require("bs-express/src/Express.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var MessagesRepository$3ServiceForum = require("../repository/MessagesRepository.bs.js");

var getMessagesByIdCours = Express.PromiseMiddleware.from((function (_next, req, rep) {
        var query = Express.$$Request.query(req);
        var match = Js_dict.get(query, "cours");
        var match$1 = Js_dict.get(query, "userId");
        if (match$1 !== undefined && match !== undefined) {
          return MessagesRepository$3ServiceForum.Messages.getAllByCours(Json_decode.string(Caml_option.valFromOption(match)), Json_decode.string(Caml_option.valFromOption(match$1))).then((function (todoJson) {
                        return Promise.resolve(Express.$$Response.sendJson(todoJson, Express.$$Response.setHeader("Status", "200", rep)));
                      }));
        } else {
          return Promise.resolve(Express.$$Response.sendStatus(/* BadRequest */19)(rep));
        }
      }));

var create = Express.PromiseMiddleware.from((function (_next, req, rep) {
        var match = Express.$$Request.bodyJSON(req);
        var tmp;
        if (match !== undefined) {
          var reqJson = Caml_option.valFromOption(match);
          var exit = 0;
          var val;
          var val$1;
          var val$2;
          try {
            val = Json_decode.field("texte", (function (param) {
                    return Json_decode.optional(Json_decode.string, param);
                  }), reqJson);
            val$1 = Json_decode.field("idCours", (function (param) {
                    return Json_decode.optional(Json_decode.string, param);
                  }), reqJson);
            val$2 = Json_decode.field("auteur", (function (param) {
                    return Json_decode.optional(Json_decode.string, param);
                  }), reqJson);
            exit = 1;
          }
          catch (raw_e){
            tmp = Promise.reject(Caml_js_exceptions.internalToOCamlException(raw_e));
          }
          if (exit === 1) {
            tmp = val !== undefined && val$1 !== undefined && val$2 !== undefined ? MessagesRepository$3ServiceForum.Messages.create(val, val$1, val$2) : Promise.reject([
                    Caml_builtin_exceptions.failure,
                    "INVALID MESSAGE"
                  ]);
          }
          
        } else {
          tmp = Promise.reject([
                Caml_builtin_exceptions.failure,
                "INVALID MESSAGE"
              ]);
        }
        return tmp.then((function (param) {
                        return Promise.resolve(Express.$$Response.sendJson(Json_encode.object_(/* :: */[
                                            /* tuple */[
                                              "success",
                                              "Message created"
                                            ],
                                            /* [] */0
                                          ]), Express.$$Response.setHeader("Status", "201", rep)));
                      })).catch((function (err) {
                      return Promise.resolve(Express.$$Response.sendJson(Json_encode.object_(/* :: */[
                                          /* tuple */[
                                            "error",
                                            "INVALID REQUEST OR MISSING MESSAGE FIELD"
                                          ],
                                          /* [] */0
                                        ]), Express.$$Response.setHeader("Status", "400", rep)));
                    }));
      }));

var $$delete = Express.PromiseMiddleware.from((function (_next, req, rep) {
        var match = Express.$$Request.bodyJSON(req);
        var tmp;
        if (match !== undefined) {
          var exit = 0;
          var val;
          try {
            val = Json_decode.field("idMessage", (function (param) {
                    return Json_decode.optional(Json_decode.$$int, param);
                  }), Caml_option.valFromOption(match));
            exit = 1;
          }
          catch (raw_e){
            tmp = Promise.reject(Caml_js_exceptions.internalToOCamlException(raw_e));
          }
          if (exit === 1) {
            tmp = val !== undefined ? MessagesRepository$3ServiceForum.Messages.deleteMessage(val) : Promise.reject([
                    Caml_builtin_exceptions.failure,
                    "INVALID MESSAGE"
                  ]);
          }
          
        } else {
          tmp = Promise.reject([
                Caml_builtin_exceptions.failure,
                "INVALID IDMESSAGE"
              ]);
        }
        return tmp.then((function (param) {
                        return Promise.resolve(Express.$$Response.sendJson(Json_encode.object_(/* :: */[
                                            /* tuple */[
                                              "success",
                                              "Message deleted"
                                            ],
                                            /* [] */0
                                          ]), Express.$$Response.setHeader("Status", "201", rep)));
                      })).catch((function (err) {
                      return Promise.resolve(Express.$$Response.sendJson(Json_encode.object_(/* :: */[
                                          /* tuple */[
                                            "error",
                                            "INVALID REQUEST OR MISSING MESSAGE FIELD"
                                          ],
                                          /* [] */0
                                        ]), Express.$$Response.setHeader("Status", "400", rep)));
                    }));
      }));

var Messages = {
  getMessagesByIdCours: getMessagesByIdCours,
  create: create,
  $$delete: $$delete
};

exports.Messages = Messages;
/* getMessagesByIdCours Not a pure module */
