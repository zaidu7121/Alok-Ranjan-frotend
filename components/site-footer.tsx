import Link from "next/link";
import {
  ArrowUpRight,
  Linkedin,
  Youtube,
  Instagram,
  Phone,
} from "lucide-react";
import type { SiteSettings } from "@/types";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: settings.linkedin || "https://www.linkedin.com/",
      Icon: Linkedin,
    },
    {
      label: "YouTube",
      href: settings.youtube || "https://www.youtube.com/",
      Icon: Youtube,
    },
    {
      label: "Instagram",
      href: settings.instagram || "https://www.instagram.com/",
      Icon: Instagram,
    },
  ];

  const navigation = [
    ["Home", "/"],
    ["About", "/about"],
    ["Expertise", "/expertise"],
    ["My Work", "/work"],
    ["Knowledge", "/publications"],
    ["News and Media", "/news"],
    ["Members", "/members"],
    ["Contact", "/contact"],
  ];

  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-content px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* BRAND + ORIGINAL ANIMATED LOGO */}
          <div>
            <Link
              href="/"
              className="footer-alexa-logo"
              aria-label="Alexa Legal Home"
            >
              <iframe
                src="/alexa-legal-header.html"
                title="Alexa Legal Animated Logo"
                tabIndex={-1}
              />
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/65">
              {settings.intro}
            </p>
          </div>

          {/* IMPORTANT LINKS */}
          <div>
            <h2 className="footer-heading">Important links</h2>
            <ul className="footer-list">
              {navigation.map(([name, href]) => (
                <li key={href}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="footer-heading">Contact</h2>

            <ul className="footer-list mt-6">
              <li>
                <a href="mailto:alok.ranjan@gmail.com">
                  alok.ranjan@gmail.com
                </a>
              </li>
              <li>New Delhi</li>
            </ul>

            {/* ANIMATED CALL */}
            <a
              href="tel:+919209770726"
              className="footer-call-wrap"
              aria-label="Call +91 91920 97726"
            >
              <span className="footer-call-icon">
                <Phone size={19} />
              </span>
              <span>
                <small>Call us</small>
                <strong>+91 91920 97726</strong>
              </span>
              <ArrowUpRight size={16} />
            </a>

            {/* SOCIAL LINKS */}
            <h3 className="footer-heading mt-7">Follow us</h3>
            <div className="footer-social-links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="footer-social-icon"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>

          <p>
            © {new Date().getFullYear()} {settings.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
