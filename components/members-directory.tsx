"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, RotateCw, Scale } from "lucide-react";
import type { Member } from "@/lib/members";

function MemberCard({ member }: { member: Member }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article className={`member-card ${flipped ? "is-flipped" : ""}`}>
      <div className="member-card-scene">
        <button
          type="button"
          className="member-card-flip"
          onClick={() => setFlipped(!flipped)}
          aria-label={`${flipped ? "Show front of" : "Show details for"} ${member.name}`}
          aria-pressed={flipped}
        >
          <div className="member-card-inner">
            <div className="member-card-face member-card-front">
              <div className="member-photo">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="member-photo-image"
                  />
                ) : (
                  <div className="member-photo-placeholder">
                    <Scale size={48} strokeWidth={1} />
                    <span>{member.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
                  </div>
                )}
                <span className="member-photo-label">MEMBER PROFILE</span>
              </div>

              <div className="member-front-info">
                <span className="member-designation">{member.designation}</span>
                <h3>{member.name}</h3>
                <div className="member-front-bottom">
                  <span>VIEW INTRODUCTION</span>
                  <RotateCw size={17} />
                </div>
              </div>
            </div>

            <div className="member-card-face member-card-back">
              <div className="member-back-top">
                <Scale size={27} strokeWidth={1.3} />
                <span>ABOUT THE MEMBER</span>
              </div>

              <h3>{member.name}</h3>
              <span className="member-back-designation">{member.designation}</span>

              <p>{member.shortBio}</p>

              <div className="member-practice-list">
                {member.practiceAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>

              <div className="member-back-bottom">
                <span>PROFILE DETAILS</span>
                <RotateCw size={17} />
              </div>
            </div>
          </div>
        </button>
      </div>

      <Link href={`/members/${member.slug}`} className="member-profile-link">
        View Full Profile <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}

export function MembersDirectory({ members }: { members: Member[] }) {
  return (
    <main className="members-page">
      <section className="members-hero">
        <div className="members-container">
          <span className="members-eyebrow">THE PEOPLE BEHIND OUR PRACTICE</span>
          <h1>Our <span>Members</span></h1>
          <p>
            Meet the people behind our work, bringing thoughtful perspectives,
            legal understanding and a commitment to careful analysis.
          </p>
          <div className="members-hero-rule" />
        </div>
      </section>

      <section className="members-directory-section">
        <div className="members-container">
          <div className="members-section-heading">
            <div>
              <span className="members-eyebrow">OUR PROFESSIONAL COMMUNITY</span>
              <h2>Meet the <span>Team</span></h2>
            </div>
            <p>
              Explore individual profiles to learn more about professional
              backgrounds, interests and areas of practice.
            </p>
          </div>

          {members.length > 0 ? (
            <div className="members-grid">
              {members.map((member) => (
                <MemberCard key={member.slug} member={member} />
              ))}
            </div>
          ) : (
            <div className="members-empty">
              <Scale size={34} strokeWidth={1.2} />
              <h3>Member profiles are being prepared.</h3>
              <p>Please check back soon for more information.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
