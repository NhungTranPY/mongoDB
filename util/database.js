const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://mongodb-test1:sXFufMfDYfvstoxG@cluster0.3bfai.mongodb.net/?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected to MongoDb Alas');
    callback(client)
  })
  .catch(err => {
    console.log(err);
  })
}

module.exports = mongoConnect