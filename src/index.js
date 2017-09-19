const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`${process.env.STH}!`);
});

const server = app.listen(
  process.env.PORT || 8080,
  () => {
    var port = server.address().port;
    console.log('App now running on port', port);
  }
);
