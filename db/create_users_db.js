var db = require('./db').db;

function setup() {
    db.serialize(function() {

        db.run(`CREATE TABLE IF NOT EXISTS users 
        (
            id INTEGER PRIMARY KEY ASC, 
            username TEXT NOT NULL, 
            password TEXT NOT NULL
        )`);
    
    });
}

module.exports = setup;