import React from "react";
import "./Contact.css";
import tv_scan_lines_2 from "../../assets/tv_scan_lines_2.gif";


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "873fda94-e3ce-46ee-9837-ba0f54c6b9d6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
      <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
      <span>&#10209;</span>
      <h1 className="vhs neon-white">Contact</h1>
      </div>
      <p>_ &#9633; x</p>
      </div>
      <div className="contact-section">
        <img src={tv_scan_lines_2} id="contact-tv-scan-lines"></img>
        <div className="contact-top">
          <h1>Would you like to contact me?</h1>
          <p>Let's talk! Please feel free to ask me anything and I will get back to you as soon as possible.</p>
        </div>
        <form onSubmit={onSubmit}className="contact-right">
          <div className="contact-form-top">
          <label htmlFor=""></label>
          <input style={{ marginLeft: -10 }}type="text" placeholder="Enter your name" name="name" />
          <label htmlFor=""></label>
          <input style={{ marginRight: -10 }}type="email" placeholder="Enter your email" name="email" />
          <label htmlFor=""></label>
          </div>

          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
