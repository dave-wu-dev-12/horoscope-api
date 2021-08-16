// Bring in the express server and create the app
let express = require("express"); // looks into the node modules to find it
let app = express();

let mongoose = require("mongoose");
// Connect to a new DB, the string can be whatever you want
// your db to be named after the localhost
mongoose
  .connect("mongodb://localhost/horoscope")
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// allow usage of json as req body
app.use(express.json());

let cors = require("cors");
// adding cors without any options to allow everything in
app.use(cors());

// get specific routes
const horoRouter = require("./routes/horoscopes");
app.use("/horoscope", horoRouter);

// spin up the server
var server = app.listen(5000, function () {
  console.log("server is running");
});
