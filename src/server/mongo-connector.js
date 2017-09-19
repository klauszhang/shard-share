const { Logger, MongoClient } = require('mongodb');
const MONGO_CONNECTION =
  process.env.MONGO_CONNECTION_STRING ||
  'mongodb://localhost:27017/shard-share';

function startLogging() {
  let logCount = 0;
  Logger.setCurrentLogger((msg, state) => {
    console.log(
      `MONGO DB REQUEST ${++logCount}: ${msg}`
    );
  });
  Logger.setLevel('debug');
  Logger.filter('class', ['Cursor']);
}

module.exports = async () => {
  let db;
  try {
    db = await MongoClient.connect(MONGO_CONNECTION);
  } catch (err) {
    console.log(err);
    throw err;
  }

  //startLogging();
  return {
    Shards: db.collection('shards'),
    Users: db.collection('users')
  };
};
