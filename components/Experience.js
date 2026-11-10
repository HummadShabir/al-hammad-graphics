import { experience } from "@/data/site";
import Icon from "./Icons";
import SectionHead from "./Section";

export default function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <SectionHead
          tag="Experience"
          title='My <span class="grad">professional journey</span>'
          text="4.5+ years of hands-on design work inside busy printing presses — now running my own brand."
        />
        <div className="timeline">
          {experience.map((e, i) => (
            <div className={`tl-item ${i % 2 ? "right" : "left"}`} key={e.company} data-reveal={i % 2 ? "right" : "left"}>
              <span className="tl-dot" />
              <div className="tl-card" data-tilt>
                <div className="tl-top">
                  <span className="tl-period">{e.period}</span>
                  <span className="tl-type">{e.duration}</span>
                </div>
                <h3>{e.role}</h3>
                <h4>{e.company}</h4>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}><Icon name="check" size={15} /> {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
