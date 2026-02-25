import "./BlogSection.css";
import BlogCard from "./BlogCard";

function BlogSection() {
  return (
    <section className="blog-section">

      <span className="top-tag">Resources & Insights</span>

      <h2>
        Latest from Our <span>Blog & Resources</span>
      </h2>

      <p className="subtitle">
        Explore articles, tutorials, and insights to help you build
        better products and grow your business with expert guidance.
      </p>

      <div className="blog-grid">

        <BlogCard
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          title="Why Every Growing Business Needs Reliable IT Support in 2026"
          desc="In today's digital-first world, technology is no longer a support system—it's the backbone of business."
          date="Feb 18, 2026"
          time="1 min"
        />

        <BlogCard
          image="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
          title="Choosing the Right IT Partner: What Businesses Should Look For"
          desc="Not all IT service providers are the same. Many promise big results but fail to deliver consistent support."
          date="Feb 18, 2026"
          time="1 min"
        />

        <BlogCard
          image="https://images.unsplash.com/photo-1551434678-e076c223a692"
          title="How Digital Solutions Improve Efficiency and Reduce Costs"
          desc="Manual processes slow businesses down. Repetitive tasks and scattered data lead to inefficiency."
          date="Feb 18, 2026"
          time="1 min"
        />

        <BlogCard
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          title="The Importance of Cybersecurity for Small and Medium Businesses"
          desc="Cybersecurity is no longer just a concern for big companies. SMBs are prime targets today."
          date="Jan 13, 2026"
          time="1 min"
        />

        <BlogCard
          image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          title="Web Development That Drives Business Growth, Not Just Design"
          desc="A website is not just an online presence—it's your digital storefront."
          date="Jan 13, 2026"
          time="1 min"
        />

      </div>

    </section>
  );
}

export default BlogSection;