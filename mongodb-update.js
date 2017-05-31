//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/UserAccount',(err,db) => {

if(err)
{
  return console.log('unable to connect..................');
}
console.log('connected............');
db.collection('todos').findOneAndUpdate({

  lastname:"vobilisetty"},{
    $set:{
      state:"india"
    }
  },{
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  })





db.close();


}


);
