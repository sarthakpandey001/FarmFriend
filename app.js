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
const port = 3000;

const dbURI= 'mongodb+srv://Devhaste:devhasteuser4321@farmfriend.tlyjg.mongodb.net/Userinfo?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
 .then((result)=>console.log('connected to db'))
 .catch((err) => console.log(err));


const Schema = mongoose.Schema;

const IdSchema = new Schema({
    User: {
        type: String,
        required: true,
      },
    username: {
    type: String,
    
  },
    password: {
    type: String,
    required: true
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
  Variety: {
    type: String,
    
  },
  Price: {
    type: Number,
  },

}, { timestamps: true });

const Idpass = mongoose.model('Idpass',IdSchema);

app.get('/', (req, res) => {
  /*res.render("index",{});*/
 res.redirect('/idpass');

})

app.get('/fqc', (req, res) => {
res.render("fqc",{});

})


app.get('/idpass', (req, res) => {
  Idpass.find().sort({ createdAt: -1 })
    .then(result => {
      res.render("index", { idpass: result, title: 'Product List' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/idpass', (req, res) => {
  // console.log(req.body);
  const idpass = new Idpass(req.body);

  idpass.save()
    .then(result => {
      res.redirect("idpass");
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