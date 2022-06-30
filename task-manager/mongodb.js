const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id.toString());
console.log(id.getTimestamp().toLocaleTimeString());
console.log(id.id);

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    console.log('Something went wrong');
  }

  const db = client.db(databaseName);

  // db.collection('users').insertOne(
  //   {
  //     name: 'Peter',
  //     age: 30,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       console.log(error);
  //     }

  //     console.log(result);
  //   }
  // );

  // db.collection('users').insertMany([
  //   {
  //     name: 'Kane',
  //     age: 31,
  //   },
  //   {
  //     name: 'Orton',
  //     age: 32,
  //   },
  // ]);

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Clean the mirror',
  //     completed: true,
  //   },
  //   {
  //     description: 'Water the plants',
  //     completed: false,
  //   },
  //   {
  //     description: 'Repair T.V',
  //     completed: false,
  //   },
  // ]);
});
