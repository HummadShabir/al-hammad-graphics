"use client";
import { useEffect, useState } from "react";
import { site, socials, stats, img } from "@/data/site";
import Icon from "./Icons";
import Counter from "./Counter";

function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!del && text === word) t = setTimeout(() => setDel(true), 1600);
    else if (del && text === "") {
      setDel(false);
      setI((n) => n + 1);
    } else
      t = setTimeout(
        () => setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        del ? 40 : 85
      );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="type">
      {text}
      <i className="caret" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="blobs" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <div className="grid-bg" aria-hidden="true" />

      <div className="container hero-in">
        <div className="hero-text">
          <p className="eyebrow anim-up" style={{ "--d": "1.3s" }}>
            <span className="dot-live" /> Available for freelance projects
          </p>
          <h1 className="anim-up" style={{ "--d": "1.4s" }}>
            Hi, I&apos;m <span className="grad">{site.name}</span>
          </h1>
          <h2 className="hero-role anim-up" style={{ "--d": "1.5s" }}>
            <Typewriter words={site.roles} />
          </h2>
          <p className="lead anim-up" style={{ "--d": "1.6s" }}>{site.tagline}</p>
          <div className="hero-cta anim-up" style={{ "--d": "1.7s" }}>
            <a href="#portfolio" className="btn" data-magnetic>
              View My Work <Icon name="arrow" size={18} />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-magnetic>
              <Icon name="whatsapp" size={18} /> WhatsApp Me
            </a>
          </div>
          <div className="hero-social anim-up" style={{ "--d": "1.8s" }}>
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual anim-zoom" style={{ "--d": "1.4s" }}>
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="hero-img">
            <img
              src={img(site.heroImage, 800)}
              srcSet={`${img(site.heroImage, 480)} 480w, ${img(site.heroImage, 800)} 800w`}
              sizes="(max-width: 900px) 80vw, 420px"
              alt="Colorful brand swatches and design work"
              fetchPriority="high"
              width="800"
              height="1000"
            />
          </div>
          <div className="float-card fc1">
            <b>4.5+</b>
            <span>Years Experience</span>
          </div>
          <div className="float-card fc2">
            <span className="tool ps">Ps</span>
            <span className="tool ai">Ai</span>
            <span className="tool cd">Cd</span>
          </div>
          <div className="float-card fc3">
            <Icon name="check" size={16} /> Print-Ready Designs
          </div>
          <span className="shape s1" />
          <span className="shape s2" />
          <span className="shape s3" />
        </div>
      </div>

      <div className="container">
        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat" key={s.label} data-reveal style={{ "--d": `${i * 0.1}s` }}>
              <b>
                <Counter to={s.value} decimals={s.decimals} />
                {s.suffix}
              </b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
