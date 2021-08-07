let express = require('express');
let app = express();
let config = require('./config');
let session = require('express-session');
let db_setup = require('./db/create_users_db');

let route = `/api/v${config.version}`

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
var example = require('./endpoints/example.js');
var register = require('./endpoints/register.js');

app.use(`${route}/example`, example);
app.use(`${route}/register`, register);

// Internal Server Error handling
app.use((err, req, res, text) => {
    console.log(err.stack);
    // res.type('text/plain');
    // res.status(500);
    // res.send(utils.error("InternalServerError", "Internal Server Error"))
})

let server = app.listen(config.port, () => console.log('SocialifyWeb-Backend listening on port 5001!'));