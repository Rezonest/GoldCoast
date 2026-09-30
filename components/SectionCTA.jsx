export default function SectionCTA({ title, text, btn, onAction }) {
  return (
    <div className="band">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="btn" onClick={onAction}>
          {btn}
        </button>
      </div>
    </div>
  );
}
