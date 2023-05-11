
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require ("http")






app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  const temp="hhh";



});
app.post("/", (req, res) => {

  const city =req.body.san
  const url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=38491c12873781552db80e992e8ab24c&units=metric"

  http.get(url, (responce) => {

    responce.on("data",function(data){
     const wdata = JSON.parse(data);
     const temp = wdata.main.temp
      console.log(temp);


      res.render("index",{sandesh:temp,city:city})
    })
  });

});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
