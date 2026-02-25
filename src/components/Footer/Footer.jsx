import "./Footer.css";
import { useState } from "react";

function Footer() {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT COLUMN */}
        <div className="footer-col about">
          <h2 className="logo">SMART <span>ITBOX</span></h2>

          <p>
            We help businesses transform their operations with intelligent
            automation and custom software solutions.
          </p>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Google Sheets Automation</li>
            <li>WhatsApp Integration</li>
            <li>Web Development</li>
            <li>Custom Software</li>
            <li>Business Automation</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Get in Touch</h3>
          <ul>
            <li>📍 Block A Skytex, Noida</li>
            <li>📞 +91 8178740797</li>
            <li>✉ ceo@smartitbox.in</li>
          </ul>
        </div>

      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <div className="newsletter-text">
          <h3>Stay Updated</h3>
          <p>
            Subscribe to our newsletter for the latest updates and insights.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2024 Smart ITBox. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;