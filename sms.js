const config = require("./config");
const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken = config.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

console.log("we will begin")
client.messages
  .create({
     body: 'Good Day',
     from: '+13344589884',
     to: '+13108939179'
   })
  .then(message => console.log(message))
  .catch(err => console.log(err) );