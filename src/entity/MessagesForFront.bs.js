'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function make(idmessage, texte, dateenvoi, idcours, auteur, nblikes, isliked) {
  return {
          idmessage: idmessage,
          texte: texte,
          dateenvoi: dateenvoi,
          idcours: idcours,
          auteur: auteur,
          nblikes: nblikes,
          isliked: isliked
        };
}

function transformDate(date) {
  return date.toString();
}

function getIdMessage(message) {
  return message.idmessage;
}

function getTexte(message) {
  return message.texte;
}

function getDateEnvoi(message) {
  return message.dateenvoi;
}

function getIdCours(message) {
  return message.idcours;
}

function getAuteur(message) {
  return message.auteur;
}

function getNbLikes(message) {
  return message.nblikes;
}

function isLiked(message) {
  return message.isliked;
}

function fromJson(json) {
  return {
          idmessage: Json_decode.field("idmessage", Json_decode.$$int, json),
          texte: Json_decode.field("texte", Json_decode.string, json),
          dateenvoi: Json_decode.field("dateenvoi", Json_decode.string, json),
          idcours: Json_decode.field("idcours", Json_decode.string, json),
          auteur: Json_decode.field("auteur", Json_decode.string, json),
          nblikes: Json_decode.field("nblikes", Json_decode.$$int, json),
          isliked: Json_decode.field("isliked", Json_decode.$$int, json)
        };
}

function fromString(jsonString) {
  var match = Json.parse(jsonString);
  if (match !== undefined) {
    return fromJson(Caml_option.valFromOption(match));
  }
  
}

function toJson(message) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "idmessage",
                String(message.idmessage)
              ],
              /* :: */[
                /* tuple */[
                  "texte",
                  message.texte
                ],
                /* :: */[
                  /* tuple */[
                    "dateenvoi",
                    message.dateenvoi
                  ],
                  /* :: */[
                    /* tuple */[
                      "idcours",
                      message.idcours
                    ],
                    /* :: */[
                      /* tuple */[
                        "auteur",
                        message.auteur
                      ],
                      /* :: */[
                        /* tuple */[
                          "nblikes",
                          String(message.nblikes)
                        ],
                        /* :: */[
                          /* tuple */[
                            "isliked",
                            String(message.isliked)
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function toString(message) {
  return JSON.stringify(toJson(message));
}

var MessagesForFront = {
  make: make,
  getIdMessage: getIdMessage,
  getTexte: getTexte,
  getDateEnvoi: getDateEnvoi,
  getIdCours: getIdCours,
  getAuteur: getAuteur,
  getNbLikes: getNbLikes,
  isLiked: isLiked,
  fromJson: fromJson,
  fromString: fromString,
  toJson: toJson,
  toString: toString,
  transformDate: transformDate
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

function toJson$1(messageslist) {
  return $$Array.map(toJson, $$Array.of_list(messageslist));
}

function toString$1(messageslist) {
  return JSON.stringify(toJson$1(messageslist));
}

var MessagesForFrontlist = {
  fromJson: fromJson$1,
  fromString: fromString$1,
  toJson: toJson$1,
  toString: toString$1
};

exports.MessagesForFront = MessagesForFront;
exports.MessagesForFrontlist = MessagesForFrontlist;
/* No side effect */
