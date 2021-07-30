var express = require('express');
var router = express.Router();
var utils = require('../utils');

router.get('/', async (req, res) => {

    res.status(405).sendFile("templates\\what_are_you_looking_for.html", {root: `${__dirname}\\..\\static\\`});
    
})

router.post('/', async (req, res) => {

    res.send("Wow, you sent post request :o");

})

module.exports = router;