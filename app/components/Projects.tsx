"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    title: "Restful Booking API Test Suite",
    description:
      "Comprehensive API test automation project covering CRUD operations on a booking REST API. Built with Java + RestAssured and Postman/Newman collections with HTML reports.",
    tech: ["Java", "RestAssured", "Postman", "Newman", "TestNG", "Maven"],
    github: "https://github.com/ToubaSlam/Restful_Booking_Postman_RestAssured_Project",
    live: null,
    tag: "API Testing",
  },
  {
    title: "SwagLabs Selenium Framework",
    description:
      "End-to-end UI test automation for the Sauce Demo e-commerce app. Implements Page Object Model, data-driven testing with TestNG, and BDD with Cucumber feature files.",
    tech: ["Java", "Selenium WebDriver", "TestNG", "Cucumber", "Maven", "POM"],
    github: "https://github.com/ToubaSlam/Java_SWAGLABS_Selenium_Project",
    live: null,
    tag: "UI Automation",
  },
  {
    title: "Python Selenium Automation",
    description:
      "Selenium-based test automation written in Python. Demonstrates cross-browser testing, element interactions, and test reporting with Python's unittest framework.",
    tech: ["Python", "Selenium", "unittest", "PyPI"],
    github: "https://github.com/ToubaSlam/Python_Selenium_Project",
    live: null,
    tag: "UI Automation",
  },
];

const tagColors: Record<string, string> = {
  "API Testing": "#4f8ef7",
  "UI Automation": "#00d4aa",
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 1.5rem", borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
          04. PROJECTS
        </p>
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
          Featured Work
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "500px" }}>
          Open-source automation projects demonstrating testing patterns, frameworks, and best practices.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Tag */}
              <span
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: `${tagColors[project.tag] ?? "#00d4aa"}22`,
                  color: tagColors[project.tag] ?? "var(--accent)",
                  border: `1px solid ${tagColors[project.tag] ?? "var(--accent)"}44`,
                  borderRadius: "4px",
                  padding: "0.2rem 0.6rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {project.tag}
              </span>

              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                {project.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75, flex: 1, marginBottom: "1.25rem" }}>
                {project.description}
              </p>

              {/* Tech */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                      borderRadius: "4px",
                      padding: "0.2rem 0.55rem",
                      fontSize: "0.78rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem" }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://github.com/ToubaSlam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
            }}
          >
            <GithubIcon size={18} /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

