import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <center className="center">
        <img src={require("../../Assets/communicate.png")} className='peach-image'/>
        <h1>Have a question we didn't answer?</h1>
        <p className="shy">Don't be shy, we'll answer, definetly.</p>
        <p><strong>Monday - Sunday: 7:00am - 5:00pm(IST)</strong></p>
      </center>
      <div className="boxes">
        <div className="social-icons"><img src={require("../../Assets/instagram.png")}/></div>
        <div className="social-icons"><img src={require("../../Assets/email.png")}/></div>
        <div className="social-icons"><img src={require("../../Assets/linkedin.png")}/></div>
      </div>
    </div>
  );
};

export default Contact;
