import "./TestimonialsSection.css";

function TestimonialsSection() {
  return (
    <section className="testimonials">

      {/* TOP TAG */}
      <div className="mini-tag">Our Mission & Vision</div>

      {/* HEADING */}
      <h2>
        <span>350+</span> Happy Clients Said To Us
        <br />
        <strong>They Are Satisfied</strong>
      </h2>

      {/* STATS ROW */}
      <div className="stats-row">
        <div className="stat-card">
          <h3>4.9/5</h3>
          <p>Average Rating</p>
        </div>

        <div className="stat-card">
          <h3>98%</h3>
          <p>Client Retention</p>
        </div>

        <div className="stat-card">
          <h3>45+</h3>
          <p>Global Clients</p>
        </div>

        <div className="stat-card">
          <h3>15+</h3>
          <p>Industries Served</p>
        </div>
      </div>

      {/* TESTIMONIAL CARDS */}
      <div className="testimonial-grid">

        <div className="testimonial-card">
          <p className="quote">
            “The team delivered exceptional results beyond our expectations.
            Their attention to detail and communication throughout the project
            was outstanding.”
          </p>

          <div className="stars">★★★★★</div>

          <div className="client-info">
            <div className="avatar">R</div>
            <div>
              <h4>Rajesh Sharma</h4>
              <span>CEO, Client 01</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="quote">
            “Their automation solutions transformed our workflow efficiency
            by 60%. Highly recommended for any business looking to scale
            operations.”
          </p>

          <div className="stars">★★★★★</div>

          <div className="client-info">
            <div className="avatar">P</div>
            <div>
              <h4>Priya Patel</h4>
              <span>Operations Head, Client 15</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="quote">
            “Professional, timely, and innovative solutions. They truly
            understand business needs and deliver results that matter.”
          </p>

          <div className="stars">★★★★★</div>

          <div className="client-info">
            <div className="avatar">A</div>
            <div>
              <h4>Amit Verma</h4>
              <span>Director, Client 30</span>
            </div>
          </div>
        </div>

      </div>

      {/* CLIENTS LOGO SECTION */}
      <div className="trusted">
        <h3>Trusted by 46+ Industry Leaders Worldwide</h3>
        <p>Our clients span across 42+ industries globally</p>

        <div className="logo-grid">
          <div className="logo-box">LOGO</div>
          <div className="logo-box">LOGO</div>
          <div className="logo-box">LOGO</div>
          <div className="logo-box">LOGO</div>
          <div className="logo-box">LOGO</div>
          <div className="logo-box">LOGO</div>
          <div className="logo-box">LOGO</div>
          <div className="logo-box">LOGO</div>
        </div>
      </div>

    </section>
  );
}

export default TestimonialsSection;