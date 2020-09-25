const express = require("express");
const bodyParser = require("body-parser");
const User = require("../database/userschema.js");


const app = express();
const PORT = 3000;
const path = require("path");
const { result } = require("underscore");
app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/new" , function(req , res){
    var obj = {
        name : req.body.name ,
        password : req.body.password ,
        balance : 50 
    }
    User.create(obj)
})

app.get('/getall' , function(req , res){
    User.find({},function(error , result ){
        if(error) console.log(error)
        res.send(result)
    })
})

app.post('/check' , function(req , res){
    User.find({name : req.body.user} , (error , result) =>{
        //  if(req.body.password === result.)
        res.send(result)
    })
})

app.post('/transfer' , function(req , res){
    console.log("me befor ===> " , req.body.forme)
    User.updateOne({name : req.body.user} , {$set:{balance: req.body.forme}} , function(err, result) {
        if (err) console.log(err)  
      });
      User.updateOne({name : req.body.to} , {$set:{balance: req.body.him}} , function(err, result) {
        if (err) console.log(err)  
      });
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });