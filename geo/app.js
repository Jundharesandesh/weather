const express = require('express');
const app = express();
var geoip = require('geoip-lite');

// const button = $("button");
//  button.addEventListener("click",()=>{
//   if(navigator.geolocation){
//     console.log(navigator.geolocation)
//
//
//     navigator.geolocation.getCurrentPosition(onSuccess,onError);
//   }else{
//     button.innerText="your browser not supported";
//   }
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");

  // function onSuccess(position){
  //   console.log(position)
  // }
  // function onError(error){
  //   if(error.code==1){
  //     button.innertext ="you denied the request";
  //   }else{
  //     button.innertext ="something went wrong";
  //   }
  // }
  //





});


var ip = "207.97.227.239";
var geo = geoip.lookup(ip);
  console.log("The IP is %s", geoip.pretty(ip));
console.log(geo);





  app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
  });
