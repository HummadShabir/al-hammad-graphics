"use client";
import { useEffect, useState } from "react";
import Icon from "./Icons";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Portfolio", "portfolio"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-in">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">H</span>
          <span className="logo-text">
            Al-Hammad<b>Graphics</b>
          </span>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, id], i) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              style={{ transitionDelay: open ? `${i * 0.05}s` : "0s" }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-sm nav-cta" onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </nav>
        <button
          className={`burger ${open ? "x" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
