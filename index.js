const express = require('express');
const app = express();
const port = parseInt(process.env.PORT || 3031);

app.get('/', (_, res) => {
  res.json({
    'message': 'Hayyyyyyyyy',
  });
});

app.listen(port);