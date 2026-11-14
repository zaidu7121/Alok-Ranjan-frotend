"use client";

import { useEffect, useState } from "react";

export function DisclaimerGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("alr-disclaimer-accepted") !== "yes") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function acceptDisclaimer() {
    try {
      localStorage.setItem("alr-disclaimer-accepted", "yes");
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="disclaimer-overlay" role="presentation">
      <section
        className="disclaimer-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
      >
        <div className="disclaimer-top">
          <span className="disclaimer-kicker">IMPORTANT NOTICE</span>
          <div className="disclaimer-logo"><iframe src="/alexa-legal-header.html" title="AlexA Legal animated logo" scrolling="no" /></div>
          <h2 id="disclaimer-title">Disclaimer</h2>
          <p className="disclaimer-intro">
            Please read the following terms carefully before accessing this website.
          </p>
        </div>

        <div className="disclaimer-content">
          <p>
            As per the applicable rules and professional conduct standards of the
            Bar Council of India, advocates are not permitted to solicit work or
            advertise. By selecting “I Agree & Continue”, you acknowledge that:
          </p>

          <ol>
            <li>
              There has been no advertisement, personal communication,
              solicitation, invitation or inducement of any kind by Alok Ranjan
              or any person associated with him to solicit work through this website.
            </li>
            <li>
              You are accessing this website voluntarily, solely to obtain
              information about Alok Ranjan for your own knowledge and use.
            </li>
            <li>
              The information on this website is made available only at your
              specific request. Accessing or using this website does not create
              an advocate-client relationship.
            </li>
            <li>
              All content is provided for general informational purposes only.
              It does not constitute legal advice, and no action should be taken
              solely on the basis of this information.
            </li>
            <li>
              Legal issues depend on their individual facts and circumstances.
              You should seek independent professional legal advice for your
              specific situation.
            </li>
            <li>
              While reasonable efforts may be made to keep the website accurate
              and accessible, no guarantee is given that it will be uninterrupted,
              error-free or free from technical issues.
            </li>
            <li>
              This website may contain links to third-party resources. Alok
              Ranjan does not necessarily endorse and is not responsible for
              their content or availability.
            </li>
            <li>
              Your use of this website and its information does not create any
              contractual, fiduciary or confidential relationship.
            </li>
          </ol>
        </div>

        <div className="disclaimer-footer">
          <p>
            By continuing, you confirm that you have read and understood this notice.
          </p>
          <button onClick={acceptDisclaimer}>
            I Agree & Continue <span aria-hidden="true">→</span>
          </button>
          <small>For informational purposes only · No solicitor-client relationship</small>
        </div>
      </section>
    </div>
  );
}



