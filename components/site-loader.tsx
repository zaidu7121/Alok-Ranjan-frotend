"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    const connection = (navigator as Navigator & {
      connection?: { effectiveType?: string; saveData?: boolean };
    }).connection;

    const network = connection?.effectiveType || "4g";
    const slowNetwork =
      connection?.saveData ||
      network === "slow-2g" ||
      network === "2g" ||
      network === "3g";

    const minimumVisibleTime = slowNetwork ? 4800 : 2400;
    const startedAt = Date.now();

    const hideWhenReady = () => {
      const remaining = Math.max(
        0,
        minimumVisibleTime - (Date.now() - startedAt)
      );
      hideTimer = setTimeout(() => setVisible(false), remaining);
    };

    if (document.readyState === "complete") {
      hideWhenReady();
    } else {
      window.addEventListener("load", hideWhenReady, { once: true });
    }

    return () => {
      window.removeEventListener("load", hideWhenReady);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="alexa-site-loader"
      role="status"
      aria-label="Loading Alexa Legal"
    >
      <div className="alexa-loader-logo">
        <iframe
          src="/alexa-legal-header.html?loader=1"
          title="Alexa Legal animated logo"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}
