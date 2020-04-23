'use strict';

var Cors = require("cors");
var Helmet = require("helmet");
var Express = require("bs-express/src/Express.js");
var Express$1 = require("express");
var Compression = require("compression");
var Controller$3ServiceForum = require("../controller/Controller.bs.js");
var LikeController$3ServiceForum = require("../controller/LikeController.bs.js");
var ChannelController$3ServiceForum = require("../controller/ChannelController.bs.js");
var MessageController$3ServiceForum = require("../controller/MessageController.bs.js");

var app = Express.express(/* () */0);

Express.App.use(app, Helmet());

Express.App.use(app, Compression());

Express.App.use(app, Express$1.json());

Express.App.use(app, Cors());

Express.App.use(app, Controller$3ServiceForum.logRequest);

Express.App.get(app, "/", Controller$3ServiceForum.welcome);

Express.App.get(app, "/message", MessageController$3ServiceForum.Messages.getMessagesByIdCours);

Express.App.post(app, "/message", MessageController$3ServiceForum.Messages.create);

Express.App.$$delete(app, "/message", MessageController$3ServiceForum.Messages.$$delete);

Express.App.post(app, "/like", LikeController$3ServiceForum.Likes.create);

Express.App.$$delete(app, "/like", LikeController$3ServiceForum.Likes.$$delete);

Express.App.get(app, "/channel", ChannelController$3ServiceForum.Channels.getAll);

Express.App.useOnPath(app, "*", Controller$3ServiceForum.badRessource);

exports.app = app;
/* app Not a pure module */
