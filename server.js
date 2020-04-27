//dependencies
const express = require("express");
var cors = require("cors");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();


//middleware to handle, APIs and JSON
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows us to use our routes
app.use(routes);

//telling heroku to use the build folder when serving web page
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.listen(PORT, function () {

    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  
