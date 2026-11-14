"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import type { SiteSettings } from "@/types";

const aboutLinks = [
  ["Firm", "/about"],
  ["Members", "/about#members"],
];

const mediaLinks = [
  ["Blog", "/news"],
  ["YouTube Videos", "/news#youtube"],
  ["Published Articles", "/publications"],
];

export function SiteHeader({}: { settings: SiteSettings }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header-inner mx-auto flex max-w-content items-center justify-between px-5 lg:px-8">
        <Link href="/" className="brand brand-alexa" aria-label="AlexA Legal home">
          <iframe
            src="/alexa-legal-header.html"
            title="AlexA Legal animated logo"
            className="alexa-logo-frame"
            scrolling="no"
            tabIndex={-1}
          />
        </Link>

        <nav className="desktop-navigation hidden items-center lg:flex" aria-label="Main navigation">
          <Link href="/" className="nav-link">Home</Link>

          <div className="nav-dropdown">
            <button type="button" className="nav-link nav-dropdown-trigger">
              About <ChevronDown size={13} />
            </button>
            <div className="nav-dropdown-menu">
              {aboutLinks.map(([label, href]) => (
                <Link key={label} href={href} className="nav-dropdown-link">{label}</Link>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <button type="button" className="nav-link nav-dropdown-trigger">
              News &amp; Media <ChevronDown size={13} />
            </button>
            <div className="nav-dropdown-menu">
              {mediaLinks.map(([label, href]) => (
                <Link key={label} href={href} className="nav-dropdown-link">{label}</Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="nav-link career-link">
            <span>Career Portal</span>
            <small>For Internships &amp; Jobs</small>
          </Link>

          <Link href="/contact" className="nav-link">Contact</Link>

          <Link href="/contact" className="consult-cta">Consult Now <span aria-hidden="true">↗</span></Link>
        </nav>

        <button
          className="menu-toggle lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>

          <details className="mobile-nav-group">
            <summary>About <ChevronDown size={15} /></summary>
            {aboutLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
          </details>

          <details className="mobile-nav-group">
            <summary>News &amp; Media <ChevronDown size={15} /></summary>
            {mediaLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
          </details>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <span>Career Portal</span>
            <small className="mobile-career-subtitle">For Internships &amp; Jobs</small>
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/contact" className="mobile-consult-cta" onClick={() => setOpen(false)}>
            Consult Now ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
