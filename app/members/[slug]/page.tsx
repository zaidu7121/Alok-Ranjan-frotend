import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Linkedin, Scale } from "lucide-react";
import { getSiteSettings } from "@/lib/api";
import { getMemberBySlug, getPublishedMembers } from "@/lib/members";
import { SiteShell } from "@/components/site-shell";

export function generateStaticParams() {
  return getPublishedMembers().map((member) => ({
    slug: member.slug
  }));
}

export default async function MemberProfilePage({
  params
}: {
  params: { slug: string };
}) {
  const settings = await getSiteSettings();
  const member = getMemberBySlug(params.slug);

  if (!member) notFound();

  return (
    <SiteShell settings={settings}>
      <main className="member-profile-page">
        <div className="members-container">
          <Link href="/members" className="member-back-link">
            <ArrowLeft size={17} /> Back to Members
          </Link>

          <div className="member-profile-layout">
            <div className="member-profile-portrait">
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              ) : (
                <div className="member-photo-placeholder">
                  <Scale size={60} strokeWidth={1} />
                  <span>{member.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
                </div>
              )}
            </div>

            <div className="member-profile-content">
              <span className="members-eyebrow">MEMBER PROFILE</span>
              <h1>{member.name}</h1>
              <h2>{member.designation}</h2>
              <p>{member.biography}</p>

              {member.practiceAreas.length > 0 && (
                <div className="member-profile-block">
                  <h3>Areas of Interest</h3>
                  <div className="member-practice-list">
                    {member.practiceAreas.map((area) => (
                      <span key={area}>{area}</span>
                    ))}
                  </div>
                </div>
              )}

              {member.education.length > 0 && (
                <div className="member-profile-block">
                  <h3>Education</h3>
                  <ul>{member.education.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              )}

              {member.experience.length > 0 && (
                <div className="member-profile-block">
                  <h3>Professional Experience</h3>
                  <ul>{member.experience.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              )}

              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-linkedin">
                  <Linkedin size={17} /> LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}