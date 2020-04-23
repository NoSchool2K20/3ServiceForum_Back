'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Process = require("process");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Format$BsWinston = require("bs-winston/src/Format.bs.js");
var Logger$BsWinston = require("bs-winston/src/Logger.bs.js");
var Builder$BsWinston = require("bs-winston/src/Builder.bs.js");
var Transport$BsWinston = require("bs-winston/src/Transport.bs.js");

var levelString = Js_option.getWithDefault("info", Js_dict.get(Process.env, "LEVEL"));

var level = levelString === "debug" ? /* Debug */4 : (
    levelString === "warn" ? /* Warn */1 : (
        levelString === "verbose" ? /* Verbose */3 : (
            levelString === "error" ? /* Error */0 : /* Info */2
          )
      )
  );

var logger = Builder$BsWinston.build(Builder$BsWinston.addTransport(Builder$BsWinston.addFormat(Builder$BsWinston.setLevel(Builder$BsWinston.create(/* () */0), level), Format$BsWinston.combine(/* :: */[
                  Format$BsWinston.createTimestamp(undefined, undefined, /* () */0),
                  /* :: */[
                    Format$BsWinston.createPrettyPrint(undefined, true, /* () */0),
                    /* [] */0
                  ]
                ])), Transport$BsWinston.createConsole(undefined, undefined, undefined, undefined, undefined, /* () */0)));

function log(loggerLevel, message) {
  return Logger$BsWinston.log(Logger$BsWinston.withMessage(Curry._1(loggerLevel, logger), message));
}

function debug(param) {
  return log(Logger$BsWinston.debug, param);
}

function info(param) {
  return log(Logger$BsWinston.info, param);
}

function warn(param) {
  return log(Logger$BsWinston.warn, param);
}

function error(param) {
  return log(Logger$BsWinston.error, param);
}

exports.debug = debug;
exports.info = info;
exports.warn = warn;
exports.error = error;
/* levelString Not a pure module */
