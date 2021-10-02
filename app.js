const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

var code = speakeasy.generateSecret({
  name: "wearedev",
});

console.log(code);

qrcode.toDataURL(code.otpauth_url, function (err, data) {
  console.log(data);
  
if(err) throw err
});
