require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require ('./models/Profiles');
// // IMPORT YOUR SCHEMAS HERE
// require("./models/Profiles"); //This is just an example. Don't forget to delete this

const app = express();

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());

// IMPORT YOUR API ROUTES HERE
const CONNECTION_URL = 'mongodb+srv://hamdamadan:skittles123@cluster0.tbur5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
//require("./routes/profilesRoutes")(app); 

const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then ((result)=> console.log ('connected to db'))
.catch ((err) => console.log (err))



app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
