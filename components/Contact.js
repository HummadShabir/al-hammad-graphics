"use client";
import { useState } from "react";
import { site, socials, services } from "@/data/site";
import Icon from "./Icons";
import SectionHead from "./Section";

export default function Contact() {
  const [form, setForm] = useState({ name: "", service: services[0].title, message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // No backend needed: the form opens WhatsApp with a ready-made message.
  const send = (e) => {
    e.preventDefault();
    const text = `Assalam-o-Alaikum Hammad! My name is ${form.name || "-"}.\nService: ${form.service}\n\n${form.message}`;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead
          tag="Contact"
          title='Let&apos;s create something <span class="grad">amazing</span>'
          text="Have a project in mind? Send a message — I usually reply within a few hours."
        />
        <div className="contact">
          <div className="contact-info" data-reveal="left">
            <a className="c-card" href={`tel:${site.phone}`}>
              <span className="c-ic"><Icon name="phone" /></span>
              <div><small>Call Me</small><b>{site.phoneIntl}</b></div>
            </a>
            <a className="c-card" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              <span className="c-ic wa"><Icon name="whatsapp" /></span>
              <div><small>WhatsApp</small><b>{site.phone}</b></div>
            </a>
            <div className="c-card">
              <span className="c-ic"><Icon name="pin" /></span>
              <div><small>Location</small><b>{site.location} · Remote worldwide</b></div>
            </div>
            <div className="c-social">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className={`soc ${s.icon}`}>
                  <Icon name={s.icon} size={20} />
                  <span><b>{s.name}</b><small>{s.handle}</small></span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={send} data-reveal="right">
            <label>
              <span>Your Name</span>
              <input value={form.name} onChange={set("name")} placeholder="e.g. Ali Khan" required />
            </label>
            <label>
              <span>Service Needed</span>
              <select value={form.service} onChange={set("service")}>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
                <option>Other</option>
              </select>
            </label>
            <label>
              <span>Project Details</span>
              <textarea rows={5} value={form.message} onChange={set("message")} placeholder="Tell me about your project, size, deadline..." required />
            </label>
            <button className="btn btn-full" type="submit" data-magnetic>
              Send via WhatsApp <Icon name="arrow" size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
