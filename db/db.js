var sqlite3 = require('sqlite3').verbose();
var users = new sqlite3.Database("./db/users.db");
var error_reports = new sqlite3.Database("./db/error_reports.db");

var create_users_db = require('./create_users_db');
var create_error_reports_db = require('./create_error_reports_db');

function db_setup() {
    create_users_db(users);
    create_error_reports_db(error_reports);
}

module.exports = { db_setup, users, error_reports };