const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

const app = express();
const port = process.env.PORT || 5000;

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World From Nodemon"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);

app.listen(port, () => console.log(`Server is running on port ${port}`));