function setup(db) {
    db.serialize(function() {

        db.run(`CREATE TABLE IF NOT EXISTS error_reports 
        (
            id INTEGER PRIMARY KEY ASC,
            errorType TEXT NULL,
            errorContext TEXT NULL,
            messageTitle TEXT NULL,
            message TEXT NULL,
            timestamp TIMESTAMP NOT NULL
        )`);
    
    });
}

module.exports = setup;