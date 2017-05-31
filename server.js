const express = require('express');
const hbs = require('hbs');
var app = express();
const mon = require('./mongodb-connect.js');
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');


app.get('/rajeev',(req,res) => {

  res.send('hello rajeev welcome to express server');
});

app.get('/',(req,res) => {

res.send({
  name:"vineeth",
  location:"kansas",
  postalcode:66216
});

});


app.get('/vineeth',(req,res) => {

  res.render('project.hbs',{

    name:"vineeth chowdary",
    lastname:"gadde",
    currentYear:new Date().getFullYear()
  })
});

app.get('/login',(req,res) => {

  res.render('login.hbs',{

    name:"login page",
    lastname:"for user",
    currentYear:new Date().getFullYear()
  })
});







app.listen(3000,() => {

  console.log('server is ready at port 3000');
});
