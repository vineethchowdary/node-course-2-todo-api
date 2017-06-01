

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todos.js');
var {User} =require('./models/user.js');


app.post('/todos',(req,res) => {
//console.log(req.body);

var todo = new Todo({

  text:req.body.text
});
todo.save().then((doc) => {
res.send(doc);
},(err) => {
res.status(400).send(err);
});
});

app.listen(3000,() => {
  console.log('server is ready at port 3000');
});