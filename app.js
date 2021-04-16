const express = require("express");
const mongoose = require("mongoose");//database
const session = require("express-session");///cokkies
const passport = require("passport");//for login and session cokkies
const findOrCreate = require("mongoose-findorcreate");
//app.use(passport.initialize());
//app.use(passport.session());


var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000;

app.get('/', (req, res) => {
    res.render("index",{});
  
})

app.get('/fqc', (req, res) => {
  res.render("fqc",{});

})


app.get('/login',(req,res) =>{
  res.render("login",{});
})

app.get('/register',(req,res) =>{
  res.render("register",{});
})

app.get('/plist', (req, res) => {
  res.render("plist",{});

})


  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})