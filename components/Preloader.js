"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`preloader ${done ? "hide" : ""}`} aria-hidden="true">
      <div className="pl-logo">
        <span>H</span>
      </div>
      <div className="pl-text">
        {"AL-HAMMAD GRAPHICS".split("").map((c, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>
            {c === " " ? " " : c}
          </span>
        ))}
      </div>
      <div className="pl-bar"><i /></div>
    </div>
  );
}
