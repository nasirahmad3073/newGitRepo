const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017/';
const databaseName = 'task-managers';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
   const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Nasir',
        age: 27
    }, (error, result) => {
        if(error) {
            console.log(error)
        }
        console.log(result.ops)
    })
  
  }
);
