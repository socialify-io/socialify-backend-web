let express = require('express');
let session = require('express-session');
let app = express();
let config = require('./config');
let utils = require('./utils');
let db_setup = require('./db/db').db_setup;
let Error = new utils.Error();
let ErrorResponse = utils.ErrorResponse;
let Endpoints = new utils.Endpoints(app);

app.use(express.static('static'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('trust proxy', 1)
app.use(session({
    secret: 'verysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

db_setup();

// Endpoints
Endpoints.add([
    {"file": "register", "path": "register"},
    {"file": "report_error", "path": "reportError"}
]);

// Not found Error handling
app.use(function (req, res, next) {
    res.status(404).sendFile("templates\\what_are_you_looking_for.html", {root: `${__dirname}\\static\\`});
})

// Internal Server Error handling
app.use((err, req, res, text) => {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send(new ErrorResponse(Error.InternalServerError, "Internal Server Error"));
})

let server = app.listen(config.port, () => console.log(`SocialifyWeb-Backend listening on port ${config.port}!`));