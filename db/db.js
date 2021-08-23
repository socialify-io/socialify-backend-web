var sqlite3 = require('sqlite3').verbose();
var users = new sqlite3.Database("./db/users.db");

var create_users_db = require('./create_users_db');

function db_setup() {
    create_users_db(users);
}

module.exports = { db_setup, users };