//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {
//
//   name:"vineeth chowdary",
//   lastanme:"gadde"
// };

// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/UserAccount',(err,db) => {

if(err)
{
  return console.log('unable to connect..................');
}
console.log('connected..........................')
// db.collection('todos').insertOne(
//   {
//     name:"rajeev",
//     lastname:"poosa",
//     country:"america"
//   },(err,result) => {
//
//   if(err)
//   {
//     return console.log('unable to connect',err);
//   }
//
// //console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
// console.log(JSON.stringify(result,undefined,2));
//  }
// );

db.collection('todos').insertOne(
  {
     firstname:"jammi",
     lastname:"vobilisetty",
     state:"texas"

  },(err,result) => {

 if(err)
 {
   return console.log("unable to connect");
 }
console.log(JSON.stringify(result,undefined,2));

  });
db.close();


}


);
