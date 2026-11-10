import { skills, softSkills } from "@/data/site";
import SectionHead from "./Section";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead
          tag="Skills & Tools"
          title='The <span class="grad">tools I master</span>'
          text="Industry-standard software for both print and digital design."
        />
        <div className="skills">
          <div className="tools">
            {skills.map((s, i) => (
              <div className="tool-card" key={s.name} data-reveal style={{ "--d": `${i * 0.08}s` }}>
                <div className="ring-chart" style={{ "--p": s.level }}>
                  <svg viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="52" className="track" />
                    <circle cx="60" cy="60" r="52" className="bar" pathLength="100" />
                  </svg>
                  <span className={`tool-badge t-${s.short.toLowerCase()}`}>{s.short}</span>
                </div>
                <b>{s.name}</b>
                <span>{s.level}%</span>
              </div>
            ))}
          </div>
          <div className="bars" data-reveal="right">
            <h3>Core Design Skills</h3>
            {skills.map((s) => (
              <div className="bar-row" key={s.name}>
                <div className="bar-label"><span>{s.name}</span><span>{s.level}%</span></div>
                <div className="bar-track"><i style={{ "--w": `${s.level}%` }} /></div>
              </div>
            ))}
            <div className="chips">
              {softSkills.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
