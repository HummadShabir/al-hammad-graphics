export default function SectionHead({ tag, title, text }) {
  return (
    <div className="sec-head" data-reveal>
      <span className="tag">{tag}</span>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {text && <p>{text}</p>}
    </div>
  );
}
