const mongoose = require("mongoose");
const { Schema } = mongoose;

// create a schema and mode l
const profileSchema = new Schema({
  OrganisationName: String,
  Email: String,
  location: String,
  Website: String,
});

// cosnt Profile = mongoose.model('Profile')

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
