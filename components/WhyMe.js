import { whyMe, site } from "@/data/site";
import Icon from "./Icons";

export default function WhyMe() {
  return (
    <section className="section why">
      <div className="container why-in">
        <div className="why-text" data-reveal="left">
          <span className="tag">Why Choose Me</span>
          <h2>
            Designs that look great <span className="grad">on screen &amp; on print</span>
          </h2>
          <p>
            Most designers only think about screens. With years inside printing presses, I know
            exactly how colors, sizes and materials behave — so your flex, cards and packaging come out perfect.
          </p>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn" data-magnetic>
            <Icon name="whatsapp" size={18} /> Get a Free Quote
          </a>
        </div>
        <div className="why-grid">
          {whyMe.map((w, i) => (
            <div className="why-card" key={w.title} data-reveal style={{ "--d": `${i * 0.1}s` }} data-tilt>
              <span className="why-n">0{i + 1}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
