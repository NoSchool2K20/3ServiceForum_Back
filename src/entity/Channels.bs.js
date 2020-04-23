'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function make(id, coursname) {
  return {
          id: id,
          coursname: coursname
        };
}

function getId(channels) {
  return channels.id;
}

function getCoursName(channels) {
  return channels.coursname;
}

function fromJson(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          coursname: Json_decode.field("coursname", Json_decode.string, json)
        };
}

function fromString(jsonString) {
  var match = Json.parse(jsonString);
  if (match !== undefined) {
    return fromJson(Caml_option.valFromOption(match));
  }
  
}

function toJson(channels) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "id",
                String(channels.id)
              ],
              /* :: */[
                /* tuple */[
                  "coursname",
                  channels.coursname
                ],
                /* [] */0
              ]
            ]);
}

function toString(channels) {
  return JSON.stringify(toJson(channels));
}

var Channels = {
  make: make,
  getId: getId,
  getCoursName: getCoursName,
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

function toJson$1(channelslist) {
  return $$Array.map(toJson, $$Array.of_list(channelslist));
}

function toString$1(channelslist) {
  return JSON.stringify(toJson$1(channelslist));
}

var Channelslist = {
  fromJson: fromJson$1,
  fromString: fromString$1,
  toJson: toJson$1,
  toString: toString$1
};

exports.Channels = Channels;
exports.Channelslist = Channelslist;
/* No side effect */
