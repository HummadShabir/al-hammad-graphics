import { services } from "@/data/site";
import Icon from "./Icons";
import SectionHead from "./Section";

export default function Services() {
  return (
    <section id="services" className="section alt">
      <div className="container">
        <SectionHead
          tag="What I Do"
          title='Design services that <span class="grad">grow your brand</span>'
          text="From a single logo to complete print and social media campaigns — everything your business needs to look professional."
        />
        <div className="services">
          {services.map((s, i) => (
            <article
              className="service"
              key={s.title}
              data-reveal
              data-tilt
              style={{ "--d": `${(i % 5) * 0.08}s` }}
            >
              <div className="service-icon">
                <Icon name={s.icon} size={26} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
