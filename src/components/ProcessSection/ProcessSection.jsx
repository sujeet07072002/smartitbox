import "./ProcessSection.css";
import img2 from "../../assets/10003.jpeg"
import img3 from "../../assets/100.webp"

function ProcessSection() {
  return (
    <section className="process">

      {/* TOP CARDS */}
      <div className="top-cards">
        <div className="top-card image-card">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzZSUyMHN0dWR5fGVufDB8fDB8fHww"
            alt="web design"
          />
        </div>

        <div className="top-card">
          <h3>Web Design</h3>
          <p>
            Web design usually refers to the user experience aspects of
            website development rather than software development.
          </p>
        </div>

        <div className="top-card">
          <h3>Digital Transformation</h3>
          <p>
            Digital transformation is the incorporation of computer-based
            technologies into an organization's products, processes and
            strategies.
          </p>
        </div>
      </div>


      {/* MAIN CONTENT */}
      <div className="process-container">

        {/* LEFT SIDE */}
        <div className="process-left">

          <span className="tag">Welcome to SMART ITBOX</span>

          <h2>
            Comprehensive Business Process
            <span> Automation</span>
          </h2>

          <p className="main-text">
            Streamline, simplify, and scale your operations with tailored
            automation solutions.
          </p>

          <p>
            At <strong>SMART ITBOX</strong>, we specialize in building
            end-to-end business systems using Google Sheets-based automation
            and custom Web Apps.
          </p>

          {/* BULLET LIST */}
          <div className="bullet-grid">
            <div className="bullet">✔ Automate workflows</div>
            <div className="bullet">✔ Centralize data</div>
            <div className="bullet">✔ Enable real-time insights</div>
            <div className="bullet">✔ Reduce manual tasks</div>
            <div className="bullet">✔ MD Dashboard</div>
            <div className="bullet">✔ Realtime Sales Summary</div>
            <div className="bullet">✔ Live Sales Survey</div>
          </div>

          <button className="more-btn">More About Us →</button>

        </div>


        {/* RIGHT SIDE */}
        <div className="process-right">

          <div className="img-large">
            <img
              src={img2}
              alt="automation"
            />
          </div>

          <div className="img-small">
            <img
              src={img3}
              alt="team"
            />
          </div>

          <div className="stat-box">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProcessSection;