const express = require('express');
const connectMongo = require('./mongo-connector');

const PORT = process.env.PORT || 8080;

const startup = async () => {
  const mongo = await connectMongo();
  const app = express();

  app.get('/', async (req, res) => {
    const query = await mongo.Shards
      .find({})
      .toArray();
    res.send(
      `hello from mongodb: ${JSON.stringify(query)}`
    );
  });

  app.listen(PORT, () => {
    console.log(`app up and running on port:${PORT}`);
  });
};

startup();
