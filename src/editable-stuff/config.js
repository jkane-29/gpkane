// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "George",
  middleName: "",
  lastName: "Kane",
  message: " Videographer and comedian. ",
  icons: [
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/@yourchannel",
    },
    {
      image: "fa-tiktok",
      url: "https://www.tiktok.com/@yourusername",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-envelope",
      url: "mailto:your.email@example.com",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/georgekane.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/georgekane.png"),
  imageSize: 375,
  message:
    "George Kane is a senior digital media student at Marquette University. He has a passion for filmmaking, video-editing and writing. Most of his work experience involves shooting/editing personal projects, ranging from stand-up comedy sets to short films. Overall, he's renowned as a cool dude, mostly by people you wouldn't know. He is not going to say their names because he respects their privacy. But just know that they exist. Besides hanging out with his many friends, George does comedy. He does comedy because it is his favorite thing. That is all. ",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// YouTube videos to display
const repos = {
  show: true,
  heading: "Filmmaking",
  videos: [
    {
      id: "jZDfP1Zewh4",
      title: "CALL 1-800 ROOMMATE!! FOR MORE INFO",
      description: "Comedy sketch"
    },
    {
      id: "m2TtTeFXC2g",
      title: "When the beat goes hard",
      description: "Music video"
    },
    {
      id: "o-9IUC0iQcM",
      title: "Buddies - Store scene",
      description: "Short film scene"
    },
    {
      id: "9iVkEGwLBFo",
      title: "A relatable YouTube video",
      description: "Comedy video"
    }
  ]
};

// STAND-UP SECTION
const standup = {
  show: true,
  heading: "Stand-up",
  videos: [
    {
      id: "ZuSY8Mtb208",
      title: "Bryan Leconte Stand-Up",
      description: "Stand-up comedy performance"
    },
    {
      id: "TVJZi67Q8-o",
      title: "Breanne Wilhite vs Lovell Black: MILWAUKEE ROAST BATTLE Bronze Medal Battle",
      description: "Milwaukee Roast Battle Bronze Medal Battle"
    },
    {
      id: "qoN72G67kqw",
      title: "Owen Joyner vs. Matt Jordan",
      description: "Roast battle performance"
    },
    {
      id: "TpGs2munfnw",
      title: "Breanne Wilhite VS Bre Kalhorn | Milwaukee Roast Battle | RBL",
      description: "Milwaukee Roast Battle performance"
    }
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/georgekane.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/georgekane.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Camera Operation", value: 90 },
    { name: "Lighting", value: 85 },
    { name: "Audio Recording", value: 80 },
    { name: "Composition & Framing", value: 90 },
    { name: "Video Editing", value: 95 },
    { name: "Color Correction & Grading", value: 85 },
    { name: "Motion Graphics", value: 75 },
    { name: "Exporting & Encoding", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always excited to connect on new projects or opportunities. Whether you have a question, a collaboration idea, or just want to say hi, feel free to reach out!",
  email: "gpkane@marquette.edu",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, standup, skills, leadership, getInTouch, experiences };
