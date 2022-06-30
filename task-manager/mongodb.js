const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    console.log('Something went wrong');
  }

  const db = client.db(databaseName);

  db.collection('users')
    .deleteMany({ age: 42 })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
