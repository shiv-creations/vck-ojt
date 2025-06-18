// src/pages/ContactPage.jsx
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = "https://docs.google.com/spreadsheets/d/1IXZAq9_odlu7AcX0WwHEdb8jgFz3hlZO28TV8EYV_iI/edit?pli=1&gid=0#gid=0";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  return (
    <div className="page-container" style={{overflow:"auto"}}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
      <h2>General Enquiries</h2>
      <p>
        <strong>Vivekanand College Main Campus</strong><br />
        [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br />
        India
      </p>
      <p>
        Phone: <b>+91 12345 67890</b><br />
        Email: <b>info@vivekanandcollege.edu</b><br />
        Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
      </p>
      <h2>Admissions Office</h2>
      <p>
        For all admission-related queries regarding undergraduate or postgraduate programs:<br />
        Phone: +91 98765 43210<br />
        Email: admissions@vivekanandcollege.edu
      </p>
      <h2>Student Support Services</h2>
      <p>
        For current student support, academic advising, or general assistance:<br />
        Phone: +91 87654 32109<br />
        Email: studentsupport@vivekanandcollege.edu
      </p>
      {/* Placeholder for a map or contact form */}
      <h2>Find Us on the Map</h2>
      <p>
        {/* [You can embed a Google Map here later using an iframe or a React map library.] */}
        <br />
        <a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/google-maps.png"
            alt="Map Placeholder"
            style={{ width: "35px", maxWidth: "50px", height: "auto" }}
          />
        View on Google Maps
        </a>
      </p>
      {/* You can add a simple contact form here later */}
      <h2>Send Us a Message</h2>
      <p>
        [A contact form with fields for Name, Email, Subject, Message can be added here.]
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
export default Contact;