"use client"
import React, {useState} from "react"
// import BunnyGarden from "./bunnyGarden"
import CatFace from "./catFace"
export default function HireMe(){

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cde3976f-587b-453d-865f-7b46a9088aaf");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Message Sent 😊");
        event.target.reset();
        } else {
        console.log("Error sending message 💀", data);
        setResult(data.message);
        }
    };


    return(
        <div className="hire-me-form">
            <div className="first-rect-form">
                Contact Me ¯\_(ツ)_/¯
            </div>

            <div className="form-container">
                <CatFace />

                <form onSubmit={onSubmit}>
                    <h2 className="hire-me-h2">Hi there...</h2>
                    <h2 className="hire-me-h2">Fill in the form to get in touch!</h2>
                    
                    <div className="form-div">
                        <label htmlFor="name">Name</label>
                        <input className="input-name" type="text" id="name" name="name" required />
                    </div>
                
                    <div className="form-div">
                        <label htmlFor="email">Email</label>
                        <input className="input-email" type="email" id="email" name="email" required />
                    </div>

                    <div className="form-div">
                        <label htmlFor="message">Message</label>
                        <textarea className="messagetext" id="message" name="message" required></textarea>
                    </div>

                    <button className="submitbutton" type="submit">
                        <span className="submitbutton-txt">Send Message</span>
                    </button>
                
                    <span className="result-form">{result}</span>

                </form>
            </div>

        </div>
    )
}