var express = require('express');
var router = express.Router();
var utils = require('../utils');
var db = require('../db/db').db;
var bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    // res.status(405).sendFile("templates\\what_are_you_looking_for.html", {root: `${__dirname}\\..\\static\\`});
})

router.post('/', async (req, res) => {

    var headers;

    try {
        headers = utils.get_headers(req);
    } catch {
        // return res.status(400).json(utils.error("InvalidHeaders", "Some required request headers not found."));
    }

    var body = req.body;

    // if (!body.username || !body.password) return res.status(500).send("no jestes spierdolony, nie dla ciebie te api jest")

    var username = body.username;
    var password = body.password;
    var repeat_password = body.repeat_password;

    if (password == repeat_password) {

        db.serialize(function() {
            
            db.all(`SELECT * FROM users`, [], (err, rows) => {
                
                if (err) if (err) throw err;

                var found = false;

                for (let i = 0; i < rows.length - 1; i++) {
                    if (rows[i].username == username) found = true;
                }

                if (found) {
                    return res.status(400).json(utils.error("InvalidUsername", "This username is already taken."));
                } else {
                    bcrypt.hash(password, 12, function(err, hash) {
                        if (err) throw err;
                        db.run(`INSERT INTO users (username, password) VALUES ('${username}', '${hash}');`);
                        return res.status(200).json(utils.success({}));
                    });
                }

            });
        
        });

    } else {
        return res.status(400).json(utils.error("InvalidRepeatPassword", "Passwords are not same."));
    }

})

module.exports = router;