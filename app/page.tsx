"use client";
import React, { useState, useEffect } from "react";

export default function Home() {

  const dreamRoles = ["Software Engineer", "Machine Learning Engineer", "Cloud Engineer"];
  const [selectedRole, setSelectedRole] = useState("");

  const generateJob = () => {
    const randomRole = dreamRoles[Math.floor(Math.random() * dreamRoles.length)];
    setSelectedRole(randomRole);
  };

  return (
    <main>

      <div className="code-block">
        <div className="code">
          <p className="function-header">def <span>find_maaha_a_job</span>():</p>
          <p className="dream_roles-line">dream_roles = ["Software Engineer", "Machine Learning Engineer", "Cloud Engineer"]</p>
          <p className="press-button-line">print("Press the button below to find her dream career in 2025")</p>
        </div>

        <div className="generate-job">
          <button className="job-btn" onClick={generateJob}><span className="text-btn">Find My Dream Job!</span></button>
          <p className="print-stmt-1">{selectedRole ? `In 2025, Maaha will work as a ${selectedRole}` : ""}</p>
        </div>
      </div>

      <div className="introduction">
        <div className="intro-block">
          <h1 className="intro-line">Hey, I'm Maaha - A CS Graduate looking for exciting roles in tech.</h1>
          <p className="intro-para">Through university, I've gained knowledge in Software Engineering and Machine Learning, 
          and I've also developed Cloud Computing skills through self-study. My interest lies at the 
            intersection of these three fields, and I'm looking for roles that allow me to work with technologies from all of them.</p>

          {/* <p className="intro-projects">Check out my projects here</p> */}
        </div>

        <div className="contact-block">
          <a href="mailto:maahaahmad99@gmail.com"><img className="mail" src="images/mail.svg" /></a>
          <a href="https://github.com/maahma" target="_blank"><img className="github" src="images/github.svg" /></a>
          <a href="https://www.linkedin.com/in/maaha-ahmad/" target="_blank"><img className="linkedin" src="images/linkedin.svg" /></a>
        </div>
      </div>

    </main>
  );
}
