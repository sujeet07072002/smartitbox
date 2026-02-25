import "./Hero.css";
import img1 from "../../assets/10001.jpg"

function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <div className="tag">
          Custom Automation. Real Results. Zero Chaos.
        </div>

        <h1>
          No Gimmicks,
          <br />
          <span className="highlight-yellow">No Templates,</span>
          <br />
          No Fake Commitments,
          <br />
          Actual work, manual to
          <br />
          <span className="highlight-orange">Massive — Automation</span>
        </h1>

        <p>
          Transform your business operations with intelligent automation and
          custom-built web applications that actually deliver results.
        </p>

        <p className="sub-text">
          We help you streamline processes, reduce manual work, and scale
          efficiently with smart technology solutions.
        </p>

        <div className="buttons">
          <button className="primary-btn">Start Free Trial</button>
          <button className="secondary-btn">View Case Studies</button>
        </div>
      </div>


      {/* RIGHT SIDE */}
      <div className="hero-right">
        <img
          src={img1}
          alt="automation"
        />

        <div className="stats">
          <div className="stat-card">
            <h3>750+</h3>
            <p>Automated Workflows</p>
          </div>
          <div className="stat-card">
            <h3>400+</h3>
            <p>Active Integrations</p>
          </div>
          <div className="stat-card">
            <h3>4+</h3>
            <p>Hours Saved Daily</p>
          </div>
          <div className="stat-card">
            <h3>98+</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;