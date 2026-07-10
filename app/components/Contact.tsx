"use client";

import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 1.5rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "var(--accent)", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
          05. CONTACT
        </p>
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
          Let&apos;s Work Together
        </h2>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "3rem", fontSize: "1.05rem" }}>
          I&apos;m open to Senior QA / SDET roles and consulting opportunities. Whether you need
          to scale automation coverage, set up CI pipelines, or need a quality advocate embedded
          in your team — let&apos;s talk.
        </p>

        <a
          href="mailto:islamtoba@gmail.com"
          style={{
            display: "inline-block",
            backgroundColor: "var(--accent)",
            color: "#000",
            padding: "0.9rem 2.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1rem",
            marginBottom: "3rem",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          Say Hello
        </a>

        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          {[
            { icon: <Mail size={20} />, label: "islamtoba@gmail.com", href: "mailto:islamtoba@gmail.com" },
            { icon: <LinkedinIcon size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/samtoba" },
            { icon: <GithubIcon size={20} />, label: "GitHub", href: "https://github.com/ToubaSlam" },
            { icon: <MapPin size={20} />, label: "Chicago, IL", href: null },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <span style={{ color: "var(--accent)" }}>{item.icon}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

