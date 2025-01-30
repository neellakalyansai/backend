const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  lottieUrl:{
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieURL:{
    type: String,
    required: true,
    default:"https://lottie.host/4ffa772f-8832-444e-a5c0-8f09fde0d680/VYsPqntEpc.json"
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const educationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  marks:{
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
});

const certificatesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  issuedBy: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("about", aboutSchema),
  Education: mongoose.model("educations", educationSchema),
  Experience: mongoose.model("experiences", experienceSchema),
  Project: mongoose.model("projects", projectsSchema),
  Certificate: mongoose.model("certificates", certificatesSchema),
  Contact: mongoose.model("contacts", contactSchema),
};
