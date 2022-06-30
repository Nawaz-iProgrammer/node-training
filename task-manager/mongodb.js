const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    console.log('Something went wrong');
  }

  const db = client.db(databaseName);

  db.collection('users')
    .updateMany({ age: 22 }, { $inc: { age: 20 } })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
