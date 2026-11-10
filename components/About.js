import { about, site, base } from "@/data/site";
import Icon from "./Icons";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about-visual" data-reveal="left">
          <div className="about-img" data-tilt>
            <img
              src={`${base}/hammad-portrait.jpg`}
              alt="Hammad Shabir, founder of Al-Hammad Graphics"
              loading="lazy"
              width="640"
              height="800"
            />
          </div>
        </div>

        <div className="about-text" data-reveal="right">
          <span className="tag">About Me</span>
          <h2>{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="checks">
            {about.highlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={16} /> {h}
              </li>
            ))}
          </ul>
          <div className="about-info">
            <div><span>Name</span><b>{site.name}</b></div>
            <div><span>Brand</span><b>{site.brand}</b></div>
            <div><span>Phone</span><b><a href={`tel:${site.phone}`}>{site.phone}</a></b></div>
            <div><span>Based in</span><b>{site.location}</b></div>
          </div>
          <a href="#contact" className="btn" data-magnetic>
            Let&apos;s Work Together <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
