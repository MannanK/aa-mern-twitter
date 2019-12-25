const express = require("express");
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const app = express();
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World From Nodemon"));
app.listen(port, () => console.log(`Server is running on port ${port}`));