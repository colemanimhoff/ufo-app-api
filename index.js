require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const pool = require('./db');
const port = parseInt(process.env.PORT || 3031);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));
app.use(cors({ origin: true, credentials: true }));

// get all sightings
app.get('/sightings', (req, res) => {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 50;

    pool.query(`SELECT * FROM sighting LIMIT ${limit} OFFSET ${offset}`)
        .then((response) => res.json(response.rows))
        .catch((error) => console.error(error));
});
// get sighting by id

app.listen(port);