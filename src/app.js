const fs = require('fs'); // will allow read and writing of files
const path = require('path');//configure absolute paths
const express = require('express');//core lirary
const app = express();

app.set('views' ,path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));//to point at public directory

app.get('/',(req,res)=>res.render('index',{title :'Index'}));
app.listen(3000,()=>console.log('PS Project Running on port 3000!'));
