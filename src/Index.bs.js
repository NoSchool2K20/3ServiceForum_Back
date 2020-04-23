'use strict';

var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Express = require("bs-express/src/Express.js");
var Process = require("process");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Api$3ServiceForum = require("./routes/Api.bs.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var Logger$3ServiceForum = require("./logger/Logger.bs.js");
var ReceiverNewCourse$3ServiceForum = require("./rabbit_receiver/ReceiverNewCourse.bs.js");

Pervasives.print_string("Startinq Noschool amqp message listener");

Pervasives.print_newline(/* () */0);

function onListen(e) {
  var val;
  try {
    val = e;
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Js_exn.$$Error) {
      var match = exn[1].message;
      Logger$3ServiceForum.error(match !== undefined ? match : "UNKNOWN ERROR");
      return Process.exit(1);
    } else {
      throw exn;
    }
  }
  return Logger$3ServiceForum.info("Listening at http://127.0.0.1:8080");
}

var server = Express.App.listen(Api$3ServiceForum.app, 8080, undefined, onListen, /* () */0);

var receiverNewCourse = ReceiverNewCourse$3ServiceForum.connection;

exports.receiverNewCourse = receiverNewCourse;
exports.onListen = onListen;
exports.server = server;
/*  Not a pure module */
