"use client";

const experiences = [
  {
    company: "MarketCrunchAI",
    role: "Senior Software QA Engineer",
    period: "Nov 2025 — Present",
    description: "Startup building an AI-driven guide to stock picking, hedging, and portfolio development.",
    tech: ["JavaScript", "Playwright", "Postman", "Rest Assured", "SQL", "GitHub Actions", "Google Cloud"],
    highlights: [
      "Led sprint QA planning, risk assessment, and release signoff across product, engineering, and DevOps.",
      "Built and maintained Playwright UI automation suites for smoke/regression on critical user journeys.",
      "Implemented API automation with Playwright/Postman including reusable auth and environment utilities.",
      "Integrated automated tests into GitHub Actions and coordinated cross-browser validation.",
      "Tested payment systems (Stripe) and fund transfer flows end-to-end.",
      "Stabilized flaky tests, improved tagging/traceability, and authored onboarding documentation.",
    ],
  },
  {
    company: "ExpleoGroup",
    role: "Software QA Engineer",
    period: "Jun 2021 — Jun 2025",
    description: "Market-leading global consulting company with clients including BMW and Allianz.",
    tech: ["Java", "Selenium", "Tosca", "Postman", "Rest Assured", "SQL", "Jenkins", "Jira"],
    highlights: [
      "Contributed to QA for Allianz's 'Meine Allianz' portal — used by 5M+ users with €38–42bn annual income.",
      "Mentored and trained 6 junior QA engineers on domain knowledge and Tricentis Tosca.",
      "Automated end-to-end GUI and API test suites integrated with Jenkins CI/CD pipelines.",
      "Migrated 2800+ test cases from desktop to web, achieving 86% First Pass Rate (FPR).",
      "Reduced defect resolution time by 15% through structured Jira-JMP workflows.",
      "Validated complex backend workflows using SQL and ensured test data integrity across releases.",
    ],
  },
  {
    company: "Teleperformance",
    role: "QA Manual Tester Intern",
    period: "Apr 2020 — Sep 2020",
    description: "Gained foundational QA skills in manual testing processes and defect management.",
    tech: ["Manual Testing", "Defect Management", "Test Case Design"],
    highlights: [
      "Executed manual test cases and documented defects across web and desktop applications.",
      "Participated in sprint ceremonies and collaborated with cross-functional teams.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 1.5rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
          03. EXPERIENCE
        </p>
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "3rem", letterSpacing: "-0.02em" }}>
          Work History
        </h2>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "11px",
              top: "8px",
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                {/* Dot */}
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: i === 0 ? "var(--accent)" : "var(--bg-card)",
                    border: "2px solid var(--accent)",
                    flexShrink: 0,
                    marginTop: "2px",
                    zIndex: 1,
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.75rem",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {exp.role}
                    </h3>
                    <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontFamily: "monospace", whiteSpace: "nowrap" }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.95rem" }}>
                    {exp.company}
                  </p>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                    {exp.description}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", fontSize: "1rem", lineHeight: 1.6, flexShrink: 0 }}>▸</span>
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          backgroundColor: "rgba(0,212,170,0.08)",
                          color: "var(--accent)",
                          border: "1px solid rgba(0,212,170,0.2)",
                          borderRadius: "4px",
                          padding: "0.2rem 0.6rem",
                          fontSize: "0.78rem",
                          fontFamily: "monospace",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
