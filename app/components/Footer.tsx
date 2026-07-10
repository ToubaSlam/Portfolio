"use client";

import { GithubIcon } from "./icons";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        textAlign: "center",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} Islam Touba. Designed & built with Next.js.
        </p>
        <a
          href="https://github.com/ToubaSlam/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
        >
          <GithubIcon size={16} /> Source
        </a>
      </div>
    </footer>
  );
}

