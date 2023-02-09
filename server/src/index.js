const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const port = 8000;

require('dotenv').config();
const route = require('./routes');
const db = require('./config/db');
//connect DB
db.connect();

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(
    cors({
        credentials: true,
        origin: [
            'http://localhost:3000',
            'http://localhost:8080',
            'http://localhost:4200'
        ]
    })
);
//http logger
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 10,
            httpOnly: true,
            sameSite: 'lax',
            secure: false
        }
    })
);

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});