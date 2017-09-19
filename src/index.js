const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('app works!');
});

app.listen(80, () => {
  console.log('app up and running on port 80');
});
