"use client";

import { MapPin, GraduationCap, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 1.5rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
          01. ABOUT ME
        </p>
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "3rem", letterSpacing: "-0.02em" }}>
          Who I Am
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left: text */}
          <div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.25rem", fontSize: "1rem" }}>
              I&apos;m a <span style={{ color: "var(--text-primary)" }}>Senior Software QA Engineer</span> based in{" "}
              <span style={{ color: "var(--accent)" }}>Chicago, IL</span> with over 5 years of experience building test automation
              frameworks that scale across large enterprise and startup environments.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.25rem", fontSize: "1rem" }}>
              My career spans fintech AI platforms and global insurance portals, where I&apos;ve architected end-to-end
              automation pipelines, led QA migrations of 2800+ test cases, mentored junior engineers, and embedded quality
              into every stage of the SDLC.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem" }}>
              I believe quality is a culture, not a phase. Whether it&apos;s a Playwright script, a REST API test suite, or
              a CI/CD gate — I build automation that teams can trust.
            </p>
          </div>

          {/* Right: info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                icon: <MapPin size={18} style={{ color: "var(--accent)" }} />,
                label: "Location",
                value: "Chicago, IL",
              },
              {
                icon: <GraduationCap size={18} style={{ color: "var(--accent)" }} />,
                label: "Education",
                value: "M.S. Computer Science — Georgia Tech (2026)",
              },
              {
                icon: <Globe size={18} style={{ color: "var(--accent)" }} />,
                label: "Languages",
                value: "English · Arabic · German · Spanish (basic)",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "1.25rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ marginTop: "2px", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {item.label}
                  </div>
                  <div style={{ color: "var(--text-primary)", fontWeight: 500 }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Certs */}
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1.25rem",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Key Certifications
              </div>
              {["ISTQB® CTFL", "Tricentis Tosca (8 certs)", "AZ-900 Azure Fundamentals", "Google Data Analytics"].map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ color: "var(--text-primary)", fontSize: "0.9rem" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
