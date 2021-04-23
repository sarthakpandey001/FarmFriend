const express = require("express");
const mongoose = require("mongoose");//database
const session = require("express-session");///cokkies
const passport = require("passport");//for login and session cokkies
const findOrCreate = require("mongoose-findorcreate");
const morgan = require('morgan');//middleware
/*const Idpass=require('Idpass')*/
//app.use(passport.initialize());
//app.use(passport.session());



var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
const port = 3000;

const dbURI= 'mongodb+srv://DevHaste:devhasteuser4321@farmfriend.tlyjg.mongodb.net/UserInfo?retryWrites=true&w=majority'
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
 .then((result)=>console.log('connected to db'))
 .catch((err) => console.log(err));


const Schema = mongoose.Schema;

const IdSchema = new Schema({
    
  username: {
    type: String,
    
  },
  
  Productname: {
    type: String,
  },
  district: {
    type: String,
    
  },
  rating: {
    type: Number,
  },
  variety: {
    type: String,
    
  },
  price: {
    type: Number,
  },

}, { timestamps: true });

const Idpass = mongoose.model('Idpass',IdSchema);
module.exports= Idpass;

app.get('/', (req, res) => {
  /*res.render("index",{});*/
 res.redirect('/idpasses');

})

app.get('/fqc', (req, res) => {
res.render("fqc",{});

})


app.get('/idpasses', (req, res) => {
  Idpass.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { idpasses: result});
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/allpss',(req,res)=>{
  Idpass.find()
  .then((result)=> {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  });
});


app.post('/idpasses', (req, res) => {
  // console.log(req.body);
  const idpass = new Idpass({
    username : req.body.username,
    Productname : req.body.Productname,
    district : req.body.district,
    rating : req.body.rating,
    variety : req.body.variety,
    price: req.body.price
  });
  idpass.save()
    .then((result) => {
      res.redirect('/idpasses');
    })
    .catch(err => {
      console.log(err);
    });
});




app.get('/login',(req,res) =>{
  res.render("login",{});
})

app.get('/register',(req,res) =>{
  res.render("register",{});
})

app.get('/plist', (req, res) => {
  res.render("plist",{});

})

app.get('/product', (req, res) => {
  res.render("product",{});

})

app.get('/talk', (req, res) => {
  res.render("talk",{});
})

  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})