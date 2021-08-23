var express = require('express');
var router = express.Router();
var utils = require('../utils');
var db = require('../db/db').error_reports;
var Response = utils.Response;
var Error = new utils.Error();
var ErrorResponse = utils.ErrorResponse;

router.post('/', async (req, res) => {

    var headers;

    try {
        headers = utils.get_headers(req);
    } catch {
        return res.status(400).json(new ErrorResponse(Error.InvalidHeaders, "Some required request headers not found."));
    }

    var body = req.body;

    var errorType = body.errorType ? body.errorType : "";
    var errorContext = body.errorContext ? body.errorContext : "";
    var messageTitle = body.messageTitle ? body.messageTitle : "";
    var message = body.message ? body.message : "";

    var date = new Date(headers['Timestamp'] * 1000).toUTCString();

    db.serialize(function() { 

        db.run(`INSERT INTO error_reports (errorType, errorContext, messageTitle, message, timestamp) VALUES ('${errorType}', '${errorContext}', '${messageTitle}', '${message}', '${date}');`);
        return res.json(new Response({}));

    });

})

module.exports = router;