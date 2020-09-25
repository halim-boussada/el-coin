const db  = require('./connect.js');

const User = require("./userschema.js")

const sampleUser = [
    {
      name: `halim` , 
      password : "20028952sami" , 
      balance : 50 
    } , 
    {
        name: `sami` , 
        password : "12345678" , 
        balance : 50 
    } 
  ];

  const insertSampleUser = function() {
        User.create(sampleUser)
      .then(() => console.log("succeesss "));
  };
  
  
insertSampleUser()