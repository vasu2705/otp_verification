const speakeasy = require("speakeasy");
const verify = speakeasy.totp.verify({
  secret: "%/,3nAxz9rtF9fLWVNOinL/^3Oartx^!",
  encoding: "ascii",
  token: "541904",
});
console.log(verify);
