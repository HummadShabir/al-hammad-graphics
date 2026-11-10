import { site, socials } from "@/data/site";
import Icon from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-big" aria-hidden="true">AL-HAMMAD GRAPHICS</div>
        <div className="footer-in">
          <a href="#home" className="logo">
            <span className="logo-mark">H</span>
            <span className="logo-text">Al-Hammad<b>Graphics</b></span>
          </a>
          <div className="footer-social">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
          <p>
            © {new Date().getFullYear()} {site.brand} · Designed for {site.name} ·{" "}
            <a href={`tel:${site.phone}`}>{site.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
