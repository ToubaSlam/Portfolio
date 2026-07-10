"use client";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Test Frameworks",
    skills: ["Playwright", "Selenium WebDriver", "Tricentis Tosca", "RestAssured", "TestNG", "JUnit", "Jest", "Cucumber"],
  },
  {
    category: "API & Performance",
    skills: ["Postman", "Newman", "JMeter", "REST API Testing"],
  },
  {
    category: "CI/CD & DevOps",
    skills: ["GitHub Actions", "Jenkins", "Docker", "Git", "GitHub", "Selenium Grid"],
  },
  {
    category: "Cloud & Data",
    skills: ["Microsoft Azure", "AWS", "Google Cloud", "Snowflake", "SQuirreL SQL", "SQL"],
  },
  {
    category: "Tools & Reporting",
    skills: ["Allure", "HTMLExtra", "TestRail", "LambdaTest", "Jira", "Confluence", "IntelliJ"],
  },
  {
    category: "Methodologies",
    skills: ["BDD", "DDT", "Agile / Scrum", "CI/CD", "Test Planning", "Defect Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 1.5rem", borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
          02. SKILLS
        </p>
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
          Tech Stack & Expertise
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "500px" }}>
          A QA engineer&apos;s toolkit — from writing tests to shipping them in automated pipelines.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              <h3 style={{ fontSize: "0.8rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", fontWeight: 600 }}>
                {group.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      backgroundColor: "rgba(0,212,170,0.08)",
                      color: "var(--text-primary)",
                      border: "1px solid rgba(0,212,170,0.2)",
                      borderRadius: "6px",
                      padding: "0.3rem 0.7rem",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
