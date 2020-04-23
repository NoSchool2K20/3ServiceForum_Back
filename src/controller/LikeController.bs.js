'use strict';

var Express = require("bs-express/src/Express.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var LikesRepository$3ServiceForum = require("../repository/LikesRepository.bs.js");

var create = Express.PromiseMiddleware.from((function (_next, req, rep) {
        var match = Express.$$Request.bodyJSON(req);
        var tmp;
        if (match !== undefined) {
          var reqJson = Caml_option.valFromOption(match);
          var exit = 0;
          var val;
          var val$1;
          try {
            val = Json_decode.field("idMessage", (function (param) {
                    return Json_decode.optional(Json_decode.$$int, param);
                  }), reqJson);
            val$1 = Json_decode.field("userId", (function (param) {
                    return Json_decode.optional(Json_decode.string, param);
                  }), reqJson);
            exit = 1;
          }
          catch (raw_e){
            tmp = Promise.reject(Caml_js_exceptions.internalToOCamlException(raw_e));
          }
          if (exit === 1) {
            tmp = val !== undefined && val$1 !== undefined ? LikesRepository$3ServiceForum.Likes.create(val, val$1) : Promise.reject([
                    Caml_builtin_exceptions.failure,
                    "INVALID MESSAGE OR AUTHOR"
                  ]);
          }
          
        } else {
          tmp = Promise.reject([
                Caml_builtin_exceptions.failure,
                "INVALID MESSAGE OR AUTHOR"
              ]);
        }
        return tmp.then((function (param) {
                        return Promise.resolve(Express.$$Response.sendJson(Json_encode.object_(/* :: */[
                                            /* tuple */[
                                              "success",
                                              "Like created"
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
          var reqJson = Caml_option.valFromOption(match);
          var exit = 0;
          var val;
          var val$1;
          try {
            val = Json_decode.field("idMessage", (function (param) {
                    return Json_decode.optional(Json_decode.$$int, param);
                  }), reqJson);
            val$1 = Json_decode.field("userId", (function (param) {
                    return Json_decode.optional(Json_decode.string, param);
                  }), reqJson);
            exit = 1;
          }
          catch (raw_e){
            tmp = Promise.reject(Caml_js_exceptions.internalToOCamlException(raw_e));
          }
          if (exit === 1) {
            tmp = val !== undefined && val$1 !== undefined ? LikesRepository$3ServiceForum.Likes.$$delete(val, val$1) : Promise.reject([
                    Caml_builtin_exceptions.failure,
                    "INVALID IDMESSAGE OR AUTHOR"
                  ]);
          }
          
        } else {
          tmp = Promise.reject([
                Caml_builtin_exceptions.failure,
                "INVALID IDMESSAGE OR AUTHOR"
              ]);
        }
        return tmp.then((function (param) {
                        return Promise.resolve(Express.$$Response.sendJson(Json_encode.object_(/* :: */[
                                            /* tuple */[
                                              "success",
                                              "Like removed"
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

var Likes = {
  create: create,
  $$delete: $$delete
};

exports.Likes = Likes;
/* create Not a pure module */
