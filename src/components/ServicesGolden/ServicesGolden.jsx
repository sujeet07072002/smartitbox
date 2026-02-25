import "./ServicesGolden.css";

function ServicesGolden() {
  return (
    <section className="golden">

      {/* ===== TOP STATS ===== */}
      <div className="stats-container">
        <div className="stat-box">
          <h3>3K+</h3>
          <p>Successful Project</p>
        </div>
        <div className="stat-box">
          <h3>20+</h3>
          <p>Experienced Team</p>
        </div>
        <div className="stat-box">
          <h3>150+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-box">
          <h3>50+</h3>
          <p>Client 5 Star Review</p>
        </div>
      </div>

      {/* ===== SERVICE TAG BAR ===== */}
      <div className="service-tags">
        <span>Custom Dashboards</span>
        <span>API Development</span>
        <span>Cloud Solutions</span>
        <span>Mobile Applications</span>
        <span>UI/UX Design</span>
        <span>Web Development</span>
        <span>Process Automation</span>
        <span>Google Sheets</span>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="golden-content">

        {/* LEFT SIDE */}
        <div className="left">

          <span className="mini-tag">Our Services</span>

          <h2>
            Boost your Business Growth with
            <br />
            excellent effective services
          </h2>

          <div className="service-list">

            <div className="service-item active">
              <div>
                <h4>Google Sheet Automation</h4>
                <p>
                  Unlock the full potential of your business operations
                  with powerful Google Sheets automation.
                </p>
              </div>
              <div className="arrow">→</div>
            </div>

            <div className="service-item">
              <h4>WhatsApp API Integration</h4>
              <div className="arrow">→</div>
            </div>

            <div className="service-item">
              <h4>Email Integration</h4>
              <div className="arrow">→</div>
            </div>

            <div className="service-item">
              <h4>Web App Development</h4>
              <div className="arrow">→</div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="view-circle">View All Work ↗</div>

          <div className="image-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg"
              alt="google sheet"
            />
          </div>
        </div>

      </div>

    </section>
  );
}

export default ServicesGolden;