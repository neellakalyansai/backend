const express = require("express");
const router = express.Router();
const {
  Intro,
  About,
  Education,
  Project,
  Certificate,
  Contact,
  Experience
} = require("../Models/portfolio-model");
const User = require("../Models/user-model");
//Get the portfolio data from the server
router.get("/getdata", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const educations = await Education.find().sort({ _id: 1 });  
    const experiences = await Experience.find().sort({ _id: -1 });
    const projects = await Project.find().sort({ _id: -1 });
    const certificates = await Certificate.find().sort({ _id: -1 });
    const contacts = await Contact.find();
    const data = {
      intro: intros[0],
      about: abouts[0],
      educations: educations,
      experiences: experiences,
      projects: projects,
      certificates: certificates,
      contact: contacts[0],
    };
    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      educations: educations,
      experiences: experiences,
      projects: projects,
      certificates: certificates,
      contact: contacts[0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

//Update Introduction
router.post("/update_intro", async (req, res) => {
  try {
    const intro = await Intro.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Introduction updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Update About
router.post("/update_about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Add Education
router.post("/add_education", async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(200).send({
      data: education,
      success: true,
      message: "Education added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Update Education
router.post("/update_education", async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: education,
      success: true,
      message: "Education updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Delete Education
router.post("/delete_education", async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: education,
      success: true,
      message: "Education deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Add Experience
router.post("/add_experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Update Experience
router.post("/update_experience", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Delete Experience
router.post("/delete_experience", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Add Project
router.post("/add_project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Update Project
router.post("/update_project", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Delete Project
router.post("/delete_project", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Add Certificate
router.post("/add_certificate", async (req, res) => {
  try {
    const certificate = new Certificate(req.body);
    await certificate.save();
    res.status(200).send({
      data: certificate,
      success: true,
      message: "Certificate added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Update Certificate
router.post("/update_certificate", async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: certificate,
      success: true,
      message: "Certificate updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Delete Certificate
router.post("/delete_certificate", async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: certificate,
      success: true,
      message: "Certificate deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//Update Contact
router.post("/update_contact", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//user login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      userName: req.body.userName,
    });
    if (user) {
      if (user.password === req.body.password) {
        user.password = undefined;
        res.status(200).send({
          data: user,
          success: true,
          message: "User logged in successfully",
        });
      } else {
        res.status(401).send({
          success: false,
          message: "Invalid password",
        });
      }
    } else {
      res.status(401).send({
        success: false,
        message: "Invalid email",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});


module.exports = router;
