/* sedang tidak digunakan

const Mongose = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'tutorial';
 
// Use connect method to connect to the server
Mongose.connect(url, function(err, client) {
  assert.equal(null, err);
  if(!err){
    console.log("Connected successfully to server Database");
  }else{
    console.log("error in DB connections "+ err);
  }
  
  const db = client.db(dbName);
 
  client.close();
});

*/