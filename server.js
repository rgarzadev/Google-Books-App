const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//load our API routes
const routes = require("./routes/api");
//load API key from .env
require('dotenv').config();

//express middleware
app.use([
    express.urlencoded({ extended: true }),
    express.json()
]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); 
}

//connect to local mongoDB googlebooks database using mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex : true,
    useNewUrlParser: true
  }
)

//link API routes to our express app
app.use(routes);

app.listen(PORT, () => {
  console.log("🚀  Server server now on port", PORT, "👻 React App on Port 3000");
});