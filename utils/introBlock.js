"use client"
import React, { useRef } from "react";
import Image from "next/image"



export default function introBlock(){
    // const scrollRef = useRef(null);

    // const handleSlowScroll = (event) => {
    //     event.preventDefault();
    //     scrollRef.current.scrollBy({
    //         top: event.deltaY * 0.3, 
    //         behavior: "smooth",
    //     });
    // };


    return (
        <div className="intro-window">
            <div className="first-rect">
                Untitled - TextEdit
            </div>

            <div className="second-rect">
                <ul title="buttons don't do anything" className="second-rect-text">
                    <li><span className="first-char">F</span>ile</li>
                    <li><span className="first-char">E</span>dit</li>
                    <li><span className="first-char">V</span>iew</li>
                    <li><span className="first-char">H</span>elp</li>
                </ul>
            </div>

            <div className="third-rect">
                <div className="third-rect-content">
                    <p><Image src="images/elements/arrow.png" className="pixel-arrow"  height={40}/> HELLO, WORLD! </p>
                    <p><Image src="images/elements/arrow.png" className="pixel-arrow"  height={40} /> </p>
                    <p><Image src="images/elements/arrow.png" className="pixel-arrow"  height={40} /> IT'S MAAHA </p>
                </div>

                <div className="intro-para">
                    <p>A CS Graduate looking for exciting roles in tech.</p>
                </div>

                <div className="contact-block">
                    <a href="mailto:maahaahmad99@gmail.com" title="Email"><Image className="mail contact-icon" src="images/contact-icons/mail.svg" width={60} height={60} /></a>
                    <a href="https://github.com/maahma" target="_blank" title="Github"><Image className="github contact-icon" src="images/contact-icons/github.svg" width={60} height={60}/></a>
                    <a href="https://www.linkedin.com/in/maaha-ahmad/" target="_blank" title="LinkedIn"><Image className="linkedin contact-icon" src="images/contact-icons/linkedin.svg" width={60} height={60} /></a>
                    <a href="docs/MaahaCV.pdf" target="_blank" rel="noopener noreferrer" title="CV"><Image className="cv-view contact-icon" src="images/contact-icons/viewcv.svg" width={60} height={60}/></a>
                </div>

            </div>
        </div>
    )
}