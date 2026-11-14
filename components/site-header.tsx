"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { SiteSettings } from "@/types";

const links = [
  ["About", "/about"],
  ["Expertise", "/expertise"],
  ["My Work", "/work"],
  ["Knowledge", "/publications"],
  ["News and Media", "/news"],
  ["Contact", "/contact"],
];

export function SiteHeader({ settings }: { settings: SiteSettings }) {
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

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
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
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
