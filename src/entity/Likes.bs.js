'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function make(idmessage, auteur) {
  return {
          idmessage: idmessage,
          auteur: auteur
        };
}

function getIdMessage(likes) {
  return likes.idmessage;
}

function getAuteur(likes) {
  return likes.auteur;
}

function fromJson(json) {
  return {
          idmessage: Json_decode.field("idmessage", Json_decode.$$int, json),
          auteur: Json_decode.field("auteur", Json_decode.string, json)
        };
}

function fromString(jsonString) {
  var match = Json.parse(jsonString);
  if (match !== undefined) {
    return fromJson(Caml_option.valFromOption(match));
  }
  
}

function toJson(likes) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "idmessage",
                String(likes.idmessage)
              ],
              /* :: */[
                /* tuple */[
                  "auteur",
                  likes.auteur
                ],
                /* [] */0
              ]
            ]);
}

function toString(likes) {
  return JSON.stringify(toJson(likes));
}

var Likes = {
  make: make,
  getIdMessage: getIdMessage,
  getAuteur: getAuteur,
  fromJson: fromJson,
  fromString: fromString,
  toJson: toJson,
  toString: toString
};

function fromJson$1(json) {
  return Json_decode.list(fromJson, json);
}

function fromString$1(jsonString) {
  var match = Json.parse(jsonString);
  if (match !== undefined) {
    return Json_decode.list(fromJson, Caml_option.valFromOption(match));
  }
  
}

function toJson$1(likeslist) {
  return $$Array.map(toJson, $$Array.of_list(likeslist));
}

function toString$1(likeslist) {
  return JSON.stringify(toJson$1(likeslist));
}

var Likeslist = {
  fromJson: fromJson$1,
  fromString: fromString$1,
  toJson: toJson$1,
  toString: toString$1
};

exports.Likes = Likes;
exports.Likeslist = Likeslist;
/* No side effect */
