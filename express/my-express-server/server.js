const express = require("express");

const app = express();
app.get("/",function(req,res){
  res.send("<h1>Hello</h1>");
})
app.get("/contact",function(req,res){
  res.send("<h1>jakkidiakhilreddy2001@gmail.com</h1>");
})
app.get("/about",function(req,res){
  res.send("<h1>My name is Akhil and I am a Software Engineer</h1>");
})
app.get("/hobbies",function(req,res){
  res.send("<ul><li>Cofee</li><li>Code</li></ul>");
})
app.listen(3000,function(){
  console.log("Server started on port 3000");
});
