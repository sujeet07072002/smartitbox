import "./CaseStudies.css";
import CaseStudyCard from "./CaseStudyCard";

function CaseStudies() {
  return (
    <section className="case-section">

      <span className="top-tag">Featured Projects</span>

      <h2>
        Success Stories & Case Studies
      </h2>

      <p className="subtitle">
        Explore how we've helped businesses achieve remarkable results
        through tailored automation and software solutions.
      </p>

      <div className="case-grid">

        <CaseStudyCard
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          category="CUSTOMIZED PRODUCT CONFIGURATIONS"
          title="Project Extended from 4 months to 11 months"
          desc="Project Overview Client Profile The client is a custom switchgear manufacturing company."
          time="2 min"
          date="Feb 18, 2026"
        />

        <CaseStudyCard
          image="https://images.unsplash.com/photo-1543286386-713bdd548da4"
          category="BUSINESS"
          title="Google Sheet Automation Implementation"
          desc="We helped a pet foods export manufacturing company fully automate manual Excel processes."
          time="1 min"
          date="Feb 18, 2026"
        />

        <CaseStudyCard
          image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FzZSUyMHN0dWR5fGVufDB8fDB8fHww"
          category="BUSINESS"
          title="DR Coats Chemical Sample Distribution Monitoring System"
          desc="Challenges faced before implementing this system included operational inefficiencies."
          time="2 min"
          date="Jan 16, 2026"
        />

      </div>

    </section>
  );
}

export default CaseStudies;