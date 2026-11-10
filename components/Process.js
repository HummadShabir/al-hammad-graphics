import { steps } from "@/data/site";
import SectionHead from "./Section";

export default function Process() {
  return (
    <section id="process" className="section alt">
      <div className="container">
        <SectionHead
          tag="How I Work"
          title='Simple <span class="grad">5-step process</span>'
          text="Clear steps, regular updates and no surprises — from first message to final file."
        />
        <div className="process">
          {steps.map((p, i) => (
            <div className="step" key={p.step} data-reveal style={{ "--d": `${i * 0.12}s` }}>
              <span className="step-num">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
