'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var MessagesForFront$3ServiceForum = require("./MessagesForFront.bs.js");

function make(command, rowCount, rows) {
  return {
          command: command,
          rowCount: rowCount,
          rows: rows
        };
}

function getCommand(message) {
  return message.command;
}

function getRowCount(message) {
  return message.rowCount;
}

function getRows(message) {
  return message.rows;
}

function fromJson(json) {
  return {
          command: Json_decode.field("command", Json_decode.string, json),
          rowCount: Json_decode.field("rowCount", Json_decode.$$int, json),
          rows: Json_decode.field("rows", (function (param) {
                  return Json_decode.list(MessagesForFront$3ServiceForum.MessagesForFront.fromJson, param);
                }), json)
        };
}

function fromString(jsonString) {
  var match = Json.parse(jsonString);
  if (match !== undefined) {
    return fromJson(Caml_option.valFromOption(match));
  }
  
}

var MessagesForFrontQuery = {
  make: make,
  getCommand: getCommand,
  getRowCount: getRowCount,
  getRows: getRows,
  fromJson: fromJson,
  fromString: fromString
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

var MessagesForFrontQueryList = {
  fromJson: fromJson$1,
  fromString: fromString$1
};

exports.MessagesForFrontQuery = MessagesForFrontQuery;
exports.MessagesForFrontQueryList = MessagesForFrontQueryList;
/* No side effect */
