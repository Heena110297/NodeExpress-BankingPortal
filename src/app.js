const fs = require('fs'); // will allow read and writing of files
const path = require('path');//configure absolute paths
const express = require('express');//core lirary
const app = express();
const {accounts , users , writeJSON}= require('./data');
const accountRoutes = require('./routes/accounts');
const serviceRoutes = require('./routes/services');
app.set('views' ,path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));//to point at public directory
app.use(express.urlencoded({extended:true}));
//express middleware to handle post data
//All of our CSS/JS for the client-side is found in the public directory. We need to point express to public.
app.use('/account',accountRoutes);
app.use('/services',serviceRoutes);



app.get('/',(req,res)=>{
  res.render('index',{title :'Account Summary',accounts});
});



app.get('/profile' ,(req,res)=>{
  res.render('profile',{user: users[0]});
});


app.listen(3000,()=>console.log('PS Project Running on port 3000!'));
