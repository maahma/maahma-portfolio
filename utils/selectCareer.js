"use client"
import React, { useState, useEffect } from "react";

export default function selectCareer(){
    const dreamRoles = ["Software Engineer", "Machine Learning Engineer", "Cloud Engineer", "Data Scientist", "Crochet Artist"];
    const [selectedRole, setSelectedRole] = useState("");

    const generateJob = () => {
        const randomRole = dreamRoles[Math.floor(Math.random() * dreamRoles.length)];
        setSelectedRole(randomRole);
    };

    return (
        <div className="code-block">
        <div className="code">
          <p className="function-header">def <span>find_maaha_a_job</span>():</p>
          <p className="dream_roles-line">dream_roles = ["Software Engineer", "Machine Learning Engineer", "Cloud Engineer", "Data Scientist", "Crochet Artist"]</p>
          <p className="press-button-line">print("Press the button below to find her dream career in 2025")</p>
        </div>

        <div className="generate-job">
          <button className="job-btn" onClick={generateJob}><span className="text-btn">Find My Dream Job!</span></button>
          <p className="print-stmt-1">{selectedRole ? `In 2025, Maaha will work as a ${selectedRole}` : ""}</p>
        </div>

      </div>
    )
}