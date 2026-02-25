import "./CaseStudyCard.css";

function CaseStudyCard({
  image,
  category,
  title,
  desc,
  time,
  date,
}) {
  return (
    <div className="case-card">

      <div className="image-wrapper">
        <img src={image} alt="case" />
        <span className="featured">Featured</span>
      </div>

      <div className="card-content">

        <span className="category">{category}</span>

        <h3>{title}</h3>

        <p>{desc}</p>

        <div className="meta">
          <span>⏱ {time}</span>
          <span>📅 {date}</span>
        </div>

        <button className="read-btn">
          Read Case Study →
        </button>

      </div>

    </div>
  );
}

export default CaseStudyCard;