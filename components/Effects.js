"use client";
import { useEffect, useState } from "react";
import Icon from "./Icons";

// Global effects: scroll progress, reveal-on-scroll, 3D tilt, magnetic buttons, back-to-top.
export default function Effects() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll progress
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
        setShowTop(h.scrollTop > 700);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveal on scroll (also picks up elements added later, e.g. filtered portfolio)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const observeAll = () =>
      document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => io.observe(el));
    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    // Tilt + magnetic (pointer devices only)
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e) => {
      const t = e.target.closest?.("[data-tilt]");
      if (t) {
        const r = t.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        t.style.transform = `perspective(900px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-6px)`;
        t.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
        t.style.setProperty("--my", `${(y + 0.5) * 100}%`);
      }
      const m = e.target.closest?.("[data-magnetic]");
      if (m) {
        const r = m.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        m.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      }
    };
    const onOut = (e) => {
      const t = e.target.closest?.("[data-tilt]");
      if (t && !t.contains(e.relatedTarget)) t.style.transform = "";
      const m = e.target.closest?.("[data-magnetic]");
      if (m && !m.contains(e.relatedTarget)) m.style.transform = "";
    };
    if (fine && !reduce) {
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerout", onOut, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <button
        className={`to-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <Icon name="up" size={20} />
      </button>
      <a className="wa-float" href="https://wa.me/923107286467" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" size={26} />
      </a>
    </>
  );
}
