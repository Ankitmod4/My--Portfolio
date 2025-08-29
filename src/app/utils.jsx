import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// Import reusable components
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
import cv from "../common/components/Resume/Ankit.pdf"

// Icons
import { FaReact, FaMobileAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


import {
  AiFillHtml5,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
  BiLogoNodejs,
} from "react-icons/bi";
import { BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiSendPlaneFill } from "react-icons/ri";

// Images
// import Ataa from "../assets/images/Ataa.png";
import GlobalShare from "../assets/images/GlobalShare.png";

// import Kasper from "../assets/images/Kasper.png";
// import Leon from "../assets/images/Leon.png";
// import twitterLogo from "../assets/images/logo.jpg";

// Components
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

// CSS
import style from "./App.module.css";
import clsx from "clsx";

// Export Components
export {
  Navbar,
  Home,
  About,
  Projects,
  Contact,
  Footer,
  DownloadButton,
  IconButton,
  InputField,
  TextAreaField,
  SubmitButton,
  Loader,
  cv,
};

// Export Project List
export const projects = [
  {
    name: "Spice City",
    link: "https://food-mern-app-frontend-fsu7.vercel.app/", // Add deployment link if available
    github: "https://github.com/Ankitmod4/Food-MERN_APPFrontend", // Add GitHub link if available
    description:
      "Developed a full-featured food ordering web application using the MERN stack. Implemented secure user authentication using JWT to ensure protected access and data privacy. Built intuitive Add-To-Cart functionality and order history tracking, allowing users to manage their product selections and view previous purchases seamlessly. Designed with Tailwind CSS for a responsive and modern interface.",
    image: GlobalShare,
  },
  {
    name: "Language Translator App",
    link: "https://language-one-sandy.vercel.app/", // Add deployment link if available
    github: "https://github.com/Ankitmod4/Language-TranslatorApp-Frontend", // Add GitHub link if available
    
    description:
      "Created a universal language translation app that allows users to translate text between multiple languages. Integrated the Gemini API for both text translation and text-to-speech functionality. Built using React for the frontend and Express with MongoDB on the backend, the app is deployed on Vercel for a fast and scalable experience. Ideal for multilingual communication and learning.",
    image: GlobalShare,
  },
  {
    name: "Cross Platform Chat-App",
   
    github: "https://github.com/Ankitmod4/ChatApp-Frontend", // Add GitHub link if available
    description:
      "Built a real-time chat application for mobile platforms using React Native and MySQL. Features include user registration, login, and individual user-to-user messaging. Implemented polling mechanisms to keep conversations updated in real time. Styled using NativeWind for a clean and responsive UI, and deployed via Expo Go for seamless cross-platform compatibility.",
    image: GlobalShare,
  },
    {
    name: "College ERP System",
    link: "https://erp.jitmkuchaman.com/", // Live deployment link
    github: "https://github.com/Ankitmod4/ERP-System-college", // GitHub link
    description:
      "Developed a comprehensive College ERP System where students can view their fees details, assignments, and other academic information in one place. Designed to simplify college administration and student interaction with a user-friendly interface. Built with modern web technologies ensuring scalability, security, and smooth performance.",
    image: GlobalShare,
  },
  // {
  //   name: "Mini Project: Currency Converter",
  //   link: "https://currency-generator-pi.vercel.app/",
  //   github: "https://github.com/Nileshnimawat/currency-generator",
   
  //   description:
  //     "Developed a responsive app for real-time currency conversion using a live exchange rate API with React and Tailwind CSS.",
  //   image: Ataa,
  // },
];

// Export Skills List
export const skills = [
  {
    name: "HTML 5",
    icon: <AiFillHtml5 size="25px" color="white" />,
    cssName: "html",
  },
  {
    name: "CSS 3",
    icon: <BiLogoCss3 size="25px" color="white" />,
    cssName: "css",
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript size="25px" color="white" />,
    cssName: "javascript",
  },
  {
    name: "React",
    icon: <FaReact size="25px" color="white" />,
    cssName: "react",
  },
  {
    name: "Redux Toolkit",
    icon: <BiLogoRedux size="25px" color="white" />,
    cssName: "redux",
  },
  {
    name: "Responsive Design",
    icon: <FaMobileAlt size="25px" color="white" />,
    cssName: "responsive",
  },
  {
    name: "Git",
    icon: <BsGit size="25px" color="white" />,
    cssName: "git",
  },
  {
    name: "Java",
    icon: <BiLogoJava size="25px" color="white" />,
    cssName: "java",
  },
  {
    name: "C++",
    icon: <TbBrandCpp size="25px" color="white" />,
    cssName: "cpp",
  },
  {
    name: "Problem Solving",
    icon: <BsPuzzle size="25px" color="white" />,
    cssName: "problem-solving",
  },
  {
    name: "Node.js",
    icon: <BiLogoNodejs size="25px" color="white" />,
    cssName: "node",
  },
  {
    name: "Express.js",
    icon: <SiExpress size="25px" color="white" />,
    cssName: "express",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size="25px" color="white" />,
    cssName: "mongodb",
  },
  
  {
  name: "MySQL",
  icon: <SiMysql size="25px" color="white" />,
  cssName: "mysql",
},
{
  name: "React Native",
  icon: <FaReact size="25px" color="white" />,
  cssName: "react-native",
}
];
