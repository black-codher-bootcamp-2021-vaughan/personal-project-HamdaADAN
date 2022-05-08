const mongoose = require("mongoose");
const { Schema } = mongoose;

// create a schema and modeal
const profileSchema = new Schema({
  OrganisationName: String,
  Email: String,
  location: String,
  Website: String,
});

mongoose.model("profiles", profileSchema);
