'use strict';

var Knex = require("knex");

var bdd_host = "bz24tpiucfm0qm0sm1qz-postgresql.services.clever-cloud.com";

var bdd_user = "ur11qcusccvyqokg98iw";

var bdd_password = "WeRXzaeor8fdR1cMW3WQ";

var bdd_db_name = "bz24tpiucfm0qm0sm1qz";

var connection = {
  host: bdd_host,
  user: bdd_user,
  password: bdd_password,
  database: bdd_db_name
};

var config = {
  client: "pg",
  version: "11",
  connection: connection,
  acquireConnectionTimeout: 20000
};

var knex = Knex(config);

var Dbconnexion = {
  connection: connection,
  config: config,
  knex: knex
};

exports.bdd_host = bdd_host;
exports.bdd_user = bdd_user;
exports.bdd_password = bdd_password;
exports.bdd_db_name = bdd_db_name;
exports.Dbconnexion = Dbconnexion;
/* knex Not a pure module */
