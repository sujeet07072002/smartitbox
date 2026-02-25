import "./ProcessCard.css";

function ProcessCard({ number, title, desc, phase }) {
  return (
    <div className="process-card">
      <div className="card-top">
        <div className="circle">{number}</div>
        <h4>{title}</h4>
      </div>

      <p>{desc}</p>

      <div className="card-bottom">
        <span>Phase {phase}</span>
        <span className="step">Step {number}</span>
      </div>
    </div>
  );
}

export default ProcessCard;