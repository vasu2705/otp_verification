const speakeasy = require("speakeasy");
const verify = speakeasy.totp.verify({
  secret: "",    //ascii secert value 
  encoding: "ascii", //format ascii
  token: "",  //secert code 
});
console.log(verify);
