"use client";

import Image from "next/image";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,212,170,0.06) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0,212,170,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: text */}
        <div>
          <p style={{ color: "var(--accent)", fontFamily: "monospace", fontSize: "1rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>
            Hi there, I&apos;m
          </p>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
              color: "var(--text-primary)",
            }}
          >
            Islam Touba
          </h1>

          <h2
            style={{
              fontSize: "clamp(1.2rem, 3.5vw, 2rem)",
              fontWeight: 400,
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
              lineHeight: 1.3,
            }}
          >
            Senior Software <span style={{ color: "var(--accent)" }}>QA Engineer</span>
            <br />
            Building confidence through automation.
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              maxWidth: "560px",
              marginBottom: "2.5rem",
              lineHeight: 1.8,
            }}
          >
            5+ years crafting test automation frameworks that scale. Expert in Playwright,
            Selenium, and CI/CD pipelines — turning quality into a competitive advantage.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "3rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
            {[
              { value: "5+", label: "Years Experience" },
              { value: "2800+", label: "Test Cases Migrated" },
              { value: "86%", label: "First Pass Rate" },
              { value: "15%", label: "Faster Defect Resolution" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a
              href="#projects"
              style={{
                backgroundColor: "var(--accent)",
                color: "#000",
                padding: "0.75rem 1.75rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                padding: "0.75rem 1.75rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")}
            >
              Get in Touch
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {[
              { icon: <GithubIcon size={20} />, href: "https://github.com/ToubaSlam", label: "GitHub" },
              { icon: <LinkedinIcon size={20} />, href: "https://www.linkedin.com/in/samtoba", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:islamtoba@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div
          style={{
            position: "relative",
            flexShrink: 0,
          }}
          className="hero-photo-wrap"
        >
          {/* Accent ring */}
          <div
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              background: "conic-gradient(var(--accent), transparent, var(--accent))",
              animation: "spin 8s linear infinite",
            }}
          />
          {/* White gap */}
          <div
            style={{
              position: "absolute",
              inset: "2px",
              borderRadius: "50%",
              backgroundColor: "var(--bg-primary)",
            }}
          />
          <Image
            src="/Portfolio/profile.jpg"
            alt="Islam Touba"
            width={280}
            height={280}
            priority
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              width: "280px",
              height: "280px",
              position: "relative",
              zIndex: 1,
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--text-secondary)",
          animation: "bounce 2s infinite",
        }}
      >
        <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>SCROLL</span>
        <ArrowDown size={16} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-photo-wrap {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
