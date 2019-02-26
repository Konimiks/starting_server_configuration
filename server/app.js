const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const logger = require('morgan');
const path = require('path');
// const favicon = require('serve-favicon');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

/* global process */

app.use(logger('dev'));

app.use(compression()); // Compress
app.use(cors()); // CORS
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // favicon
app.use(cookieParser()); // Cookies
app.use('/static', express.static('public')); // static

app.use(bodyParser.text({type: 'text/html'}))
app.use(bodyParser.urlencoded({ extended: false })); // create application/x-www-form-urlencoded parser
app.use(bodyParser.json()); // create application/json parser

let router = require('./routes');

router.addRoutes(app);

app.use('/*', (req, res) => {
    res.sendStatus(404);
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, function () {
    console.log('Server is up and running on port ' + process.env.PORT);
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});