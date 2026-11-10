"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { works, categories, img } from "@/data/site";
import Icon from "./Icons";
import SectionHead from "./Section";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [light, setLight] = useState(-1);

  const list = useMemo(
    () => (filter === "All" ? works : works.filter((w) => w.cat === filter)),
    [filter]
  );

  const counts = useMemo(() => {
    const c = { All: works.length };
    works.forEach((w) => (c[w.cat] = (c[w.cat] || 0) + 1));
    return c;
  }, []);

  const close = useCallback(() => setLight(-1), []);
  const step = useCallback(
    (d) => setLight((n) => (n + d + list.length) % list.length),
    [list.length]
  );

  useEffect(() => {
    if (light < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [light, close, step]);

  const current = light >= 0 ? list[light] : null;

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionHead
          tag="Portfolio"
          title='Selected <span class="grad">creative work</span>'
          text="Browse designs by category — branding, social media, print, posters, packaging and digital."
        />

        <div className="filters" data-reveal role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={filter === c ? "on" : ""}
              onClick={() => setFilter(c)}
            >
              {c} <sup>{counts[c] || 0}</sup>
            </button>
          ))}
        </div>

        <div className="works" key={filter}>
          {list.map((w, i) => (
            <figure
              key={w.id}
              className={`work ${w.tall ? "tall" : ""}`}
              style={{ "--d": `${(i % 6) * 0.07}s` }}
              onClick={() => setLight(i)}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLight(i)}
            >
              <img
                src={img(w.id, 700)}
                srcSet={`${img(w.id, 420)} 420w, ${img(w.id, 700)} 700w`}
                sizes="(max-width: 600px) 92vw, (max-width: 1000px) 45vw, 30vw"
                alt={w.title}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>{w.cat}</span>
                <b>{w.title}</b>
                <i><Icon name="zoom" size={20} /></i>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true" aria-label={current.title}>
          <button className="lb-close" onClick={close} aria-label="Close"><Icon name="close" /></button>
          <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">‹</button>
          <figure onClick={(e) => e.stopPropagation()} key={current.id}>
            <img src={img(current.id, 1400)} alt={current.title} />
            <figcaption>
              <span>{current.cat}</span> {current.title}
              <em>{light + 1} / {list.length}</em>
            </figcaption>
          </figure>
          <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">›</button>
        </div>
      )}
    </section>
  );
}
