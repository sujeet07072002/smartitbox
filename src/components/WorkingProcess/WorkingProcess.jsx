import "./WorkingProcess.css";
import ProcessCard from "./ProcessCard";

function WorkingProcess() {
  return (
    <section className="working">

      <div className="working-container">

        {/* LEFT SIDE */}
        <div className="left-side">

          <div className="timeline-box">
            <span className="mini-label">4-6 Weeks</span>
            <h4>Work Process Flow</h4>
          </div>

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHRlYW18ZW58MHx8MHx8fDA%3D"
              alt="team"
            />
          </div>

          <div className="stats-row">
            <div className="mini-card">
              <h5>98%</h5>
              <p>Success Rate</p>
            </div>
            <div className="mini-card">
              <h5>24/7</h5>
              <p>Support</p>
            </div>
            <div className="mini-card">
              <h5>100+</h5>
              <p>Projects Delivered</p>
            </div>
          </div>

          <div className="circle-btn">
            More About →
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="right-side">

          <div className="heading">
            <span className="tag">Work Process</span>
            <h2>
              Our Working Process
              <span> Faster And Easier</span>
            </h2>
            <p>
              Our structured 7-step methodology ensures your project is delivered with
              precision and efficiency.
            </p>
          </div>

          <div className="card-grid">
            <ProcessCard
              number="01"
              title="Requirement Gathering"
              desc="We understand business needs, workflows and goals."
              phase="1"
            />

            <ProcessCard
              number="02"
              title="Planning & Wireframing"
              desc="We create wireframes and system structure."
              phase="2"
            />

            <ProcessCard
              number="03"
              title="Design"
              desc="Clean and intuitive UI/UX design process."
              phase="3"
            />

            <ProcessCard
              number="04"
              title="Development"
              desc="Build solution using modern technologies."
              phase="4"
            />

            <ProcessCard
              number="05"
              title="Testing & Feedback"
              desc="Testing ensures speed, quality and security."
              phase="5"
            />

            <ProcessCard
              number="06"
              title="Deployment"
              desc="We deploy stable and scalable systems."
              phase="6"
            />

            <ProcessCard
              number="07"
              title="Training & Support"
              desc="Complete support and documentation."
              phase="7"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default WorkingProcess;