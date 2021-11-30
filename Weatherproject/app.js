const express=require("express");
const app=express();
const https=require("https");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res) {
  res.sendFile(__dirname+"/index.html");
  });


  // res.send("server is up and running");

app.post("/",function(req,res){
  console.log(req.body.cityName);
  const query=req.body.cityName;
  const apiKey="72bd45073a826d0b03ae19a9dc148265";
  const unit="metric";
  const url="https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey+"&units="+unit;
  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
      const WeatherData=JSON.parse(data);
      const temp=WeatherData.main.temp;
      const weatherDescription=WeatherData.weather[0].description;
      const icon=WeatherData.weather[0].icon;
      const imagURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<p>The Weather currently is "+weatherDescription+"</p>");
      res.write("<h1>The Temperature in "+query+" is "+temp+" degree Celcius.</h1>");
      res.write("<img src=" +imagURL+ ">");
      res.send();
    });});
})














app.listen(3000,function() {
  console.log("server is running on port 3000.");
})
