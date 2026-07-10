"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "rgba(8,12,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <a href="#home" style={{ color: "var(--accent)", fontWeight: 700, fontSize: "1.25rem", textDecoration: "none", letterSpacing: "-0.02em" }}>
          IT<span style={{ color: "var(--text-secondary)" }}>.dev</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }} className="hidden-mobile">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Islam_Touba_QA-Resume2026.pdf"
          download
          style={{
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            padding: "0.4rem 1rem",
            borderRadius: "6px",
            fontSize: "0.875rem",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          className="hidden-mobile"
          onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = "var(--accent)"; (e.target as HTMLElement).style.color = "#000"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = "transparent"; (e.target as HTMLElement).style.color = "var(--accent)"; }}
        >
          Resume
        </a>

        {/* Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", display: "none" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)", padding: "1rem 1.5rem" }} className="show-mobile">
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
