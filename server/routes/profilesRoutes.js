const Profile = require("../models/Profiles.js");


 const footwearRoutes = (app) => {
   app.get(`/api/Profiles`, async (req, res) => {
     const footwear = await Profile.find();

     return res.status(200).send(footwear);
   });

   app.post(`/api/Profiles`, async (req, res) => {
     const profile = await Profile.create(req.body);

     return res.status(201).send({
       error: false,
       footwear,
     });
   });

   app.put(`/api/Profiles/:id`, async (req, res) => {
     const { id } = req.params;

     const profile = await Profile.findByIdAndUpdate(id, req.body);

     return res.status(202).send({
       error: false,
       profile,
     });
   });

   app.delete(`/api/Profiles/:id`, async (req, res) => {
     const { id } = req.params;

     const profile = await Profile.findByIdAndDelete(id);

     return res.status(202).send({
       error: false,
      profile,
     });
   });
 };

 module.exports = profilesRoutes;





























// const mongoose = require("mongoose");
// const Profile = mongoose.model("profiles");
// const express = require ("express")
// const Profile = require (./models/profile); 

// const profileRoutes = (app) => {
//   app.get(`/api/profile`, async (req, res) => {
//     const profiles = await Profile.find();

//     return res.status(200).send(profiles);
//   });

//   app.post(`/api/profile`, async (req, res) => {
//     const profile = await Profile.create(req.body);

//     return res.status(201).send({
//       error: false,
//       profile,
//     });
//   });

//   app.put(`/api/profile/:id`, async (req, res) => {
//     const { id } = req.params;

//     const profile = await Profile.findByIdAndUpdate(id, req.body);

//     return res.status(202).send({
//       error: false,
//       profile,
//     });
//   });

//   app.delete(`/api/profile/:id`, async (req, res) => {
//     const { id } = req.params;

//     const profile = await Profile.findByIdAndDelete(id);

//     return res.status(202).send({
//       error: false,
//       profile,
//     });
//   });
// };

// module.exports = profileRoutes;
