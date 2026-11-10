import { about, site, img } from "@/data/site";
import Icon from "./Icons";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about-visual" data-reveal="left">
          <div className="about-img" data-tilt>
            <img
              src={img(site.aboutImage, 800)}
              srcSet={`${img(site.aboutImage, 500)} 500w, ${img(site.aboutImage, 800)} 800w`}
              sizes="(max-width: 900px) 90vw, 480px"
              alt="Designer working on a drawing tablet"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          <div className="about-badge">
            <b>2</b>
            <span>Printing<br />Presses</span>
          </div>
          <div className="about-badge b2">
            <b>4.5+</b>
            <span>Years of<br />Design</span>
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
