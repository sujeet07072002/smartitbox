import "./BusinessSection.css";
import img4 from "../../assets/10002.jpeg"

function BusinessSection() {
  return (
    <section className="business">

      {/* Heading */}
      <div className="business-heading">
        <h2>
          Business Automation & Custom Software Solutions
        </h2>
        <h3>Core Offerings</h3>
        <p>
          Transform your business with intelligent automation
        </p>
      </div>

      {/* Content */}
      <div className="business-container">

        {/* LEFT IMAGE */}
        <div className="business-left">
          <img
            src={img4}
            alt="business"
          />
          <button className="contact-btn">Contact Us →</button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="business-right">

          <div className="offer-block">
            <h4>Google Sheets Automation</h4>
            <ul>
              <li>Automate manual workflows using Google Apps Script</li>
              <li>Real-time data sync between sheets and dashboards</li>
              <li>Auto PDF generation and exports</li>
              <li>Custom ERP & MIS systems</li>
              <li>WhatsApp API Integrations</li>
              <li>Integration with Google Sheets or CRM</li>
            </ul>
          </div>

          <div className="offer-block">
            <h4>Dynamic Web Applications</h4>
            <ul>
              <li>Modern websites using React, Next.js & Node.js</li>
              <li>Admin panels with real-time reporting</li>
              <li>Field team automation tools</li>
              <li>Sales tracking & quotation flow</li>
            </ul>
          </div>

          <div className="offer-block">
            <h4>Voice-to-Text Automation</h4>
            <ul>
              <li>Convert WhatsApp voice to structured text</li>
              <li>PDF & Excel document automation</li>
              <li>Auto invoice & quotation generation</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}

export default BusinessSection;