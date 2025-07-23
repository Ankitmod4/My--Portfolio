import React from 'react'
// import style
import style from "./App.module.css";
import clsx from "clsx";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";

import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
  BiLogoNodejs,
  BiLogoMongodb,

  
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
       <div className={style.footer}>
              <div className={style.container}>
                <div className={style["footer-info"]}>
                  <div>
                    <h3>Ankit Mod</h3>
                    <p>
                      A Full Stack Web/App Developer building full-stack mobile Applications and Web
                      Applications with a strong focus on both Frontend and Backend
                      development, contributing to the overall success of the product.
                    </p>
                  </div>
                  <div className={style.social}>
                    <h3>Social</h3>
                    <div className="">
                      <a
                        className={style.git}
                        target="_blank"
                        href="https://github.com/Ankitmod4"
                      >
                        <AiFillGithub size="30px" color="white" />
                      </a>
                      <a
                        className={style.linkedin}
                        target="_blank"
                        href="https://www.linkedin.com/in/ankit-mod-103106254/"
                      >
                        <AiFillLinkedin size="30px" color="white" />
                      </a>
                      <a
                        className={style.gmail}
                        target="_blank"
                        href="mailto:ankitmod76gmail.com?subject=SendMail&body=Description"
                      >
                        <BiLogoGmail size="30px" color="white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={style["copy-right"]}>
                  © Copyright 2025. Made by <span>Ankit Mod</span>
                </div>
              </div>
            </div>
    </>
  )
}

export default Footer
