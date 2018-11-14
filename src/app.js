const fs = require('fs'); // will allow read and writing of files
const path = require('path');//configure absolute paths
const express = require('express');//core lirary
const app = express();

app.set('views' ,path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));//to point at public directory
//All of our CSS/JS for the client-side is found in the public directory. We need to point express to public.

const accountData = fs.readFileSync(
  path.join(__dirname ,'json','accounts.json'),'utf8'
);
// the readFileSync function of the built-in fs library to read the contents of the file located at src/json/accounts.json. Note: read the file with the UTF8 encoding.
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(
  path.join(__dirname ,'json','users.json'),'utf8'
);

const users = JSON.parse(userData);

app.get('/',(req,res)=>{
  res.render('index',{title :'Account Summary',accounts});
});

app.get('/savings',(req,res)=>{
  res.render('account',{account: accounts.savings});
});

app.get('/checking',(req,res)=>{
  res.render('account',{account: accounts.checking});
});

app.get('/credit',(req,res)=>{
  res.render('account',{account: accounts.credit});
});

app.get('/profile' ,(req,res)=>{
  res.render('profile',{user: users[0]});
});
app.listen(3000,()=>console.log('PS Project Running on port 3000!'));
