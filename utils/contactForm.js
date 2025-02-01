"use client"
import React, {useState} from "react"
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
            <div className="hireme-sidetext">
                <h2>Fill in the form to get in touch!</h2>
                <p className="hire-me-p">I'll get back to you as soon as I can 🌞</p>
            </div>
             
            <form onSubmit={onSubmit}>
                {/* <label className="label name" htmlFor="name">Name</label> */}
                <input className="input-name" type="text" id="name" name="name" placeholder="Name" required />

                {/* <label className="label email" htmlFor="email">Email</label> */}
                <input className="input-email" type="text" id="email" name="email" placeholder="Email" required />

                {/* <label className="label message" htmlFor="message">Message</label> */}
                <textarea className="messagetext" id="message" name="message" placeholder="Your message here..." required></textarea>

                <button className="submitbutton" type="submit">Send Message</button>
            </form>
            <span className="result-form">{result}</span>
        </div>
    )
}