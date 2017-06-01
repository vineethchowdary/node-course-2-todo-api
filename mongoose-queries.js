
const {ObjectID} = require('mongodb');

const {mongoose} = require('./server/db/mongoose.js');
const {Todo} = require('./server/models/todos.js');

var id ='592f459c15bb3201d4d5c4a8';

if(!ObjectID.isValid(id))
{
  console.log('id not valid');
}

Todo.find({
  _id:id
}).then((todos) => {
  console.log(todos);
});

Todo.findOne({
  _id:id
}).then((todos) => {
  console.log(todos);
});

Todo.findById(id).then((todo) => {
if(!todo)
{
  return console.log('id not found');
}

  console.log(todo);
}).catch((e) => {
  console.log(e);
});
