const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = parseInt(process.env.PORT || 3031);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));
app.use(cors({ origin: true, credentials: true }));

app.get('/', (_, res) => {
    res.json({
        'message': 'BISHrfgergergergerg',
    });
});

app.listen(port);