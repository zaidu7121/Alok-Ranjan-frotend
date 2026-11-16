"use client";

import { MessageCircle, Phone } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919209770726"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="floating-whatsapp-icon">
        <MessageCircle size={32} strokeWidth={2.2} />
        <Phone size={14} strokeWidth={2.5} />
      </span>
      <span>Chat with us</span>
    </a>
  );
}
