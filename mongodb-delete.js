//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/UserAccount',(err,db) => {

if(err)
{
  return console.log('unable to connect..................');
}
console.log('connected..........................')
// db.collection('todos').find({_id:new ObjectID('592f325640eece17cc5cc862')}).toArray().then((docs) => {
//   console.log('todos');
//   console.log(JSON.stringify(docs,undefined,2));
//
// },(err) => {
//   console.log(err);
// });
//
// db.collection('todos').deleteMany({lastname:"gaddey"}).then((result) => {
//   console.log(result);
// });

// db.collection('todos').deleteOne({lastname:"gadde"}).then((result) => {
//
// console.log(result);
// });
db.collection('todos').findOneAndDelete({lastname:"gadde"}).then((result) => {
console.log(result);

});


db.close();


}


);
