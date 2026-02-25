import "./BlogCard.css";

function BlogCard({
  image,
  title,
  desc,
  date,
  time
}) {
  return (
    <div className="blog-card">

      <div className="blog-image">
        <img src={image} alt="blog" />
        <span className="time">{time}</span>
      </div>

      <div className="blog-content">

        <span className="badge">Smart ITBox</span>

        <h3>{title}</h3>

        <p>{desc}</p>

        <div className="blog-footer">
          <span className="date">{date}</span>
          <button className="read-btn">Read →</button>
        </div>

      </div>

    </div>
  );
}

export default BlogCard;