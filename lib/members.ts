export type Member = {
  slug: string;
  name: string;
  designation: string;
  photo: string | null;
  shortBio: string;
  biography: string;
  practiceAreas: string[];
  education: string[];
  experience: string[];
  linkedin?: string;
  displayOrder: number;
  published: boolean;
};

export const members: Member[] = [
  {
    slug: "alok-ranjan",
    name: "Alok Ranjan",
    designation: "Intellectual Property Law",
    photo: null,
    shortBio: "An approach to intellectual property law grounded in research, considered analysis and an appreciation of the ideas that shape our world.",
    biography: "An approach to intellectual property law grounded in research, considered analysis and an appreciation of the ideas that shape our world.",
    practiceAreas: ["Intellectual Property", "Technology & Law", "Legal Research"],
    education: [],
    experience: [],
    displayOrder: 1,
    published: true
  },
  {
    slug: "aarav-sharma",
    name: "Aarav Sharma",
    designation: "Corporate & Commercial Law",
    photo: null,
    shortBio: "Demo profile highlighting corporate law, commercial transactions and business-focused legal research.",
    biography: "This is a fictional demonstration profile created for website preview. Replace with verified professional information before publishing.",
    practiceAreas: ["Corporate Laws", "Commercial Agreements", "Business & Legal Research"],
    education: [],
    experience: [],
    displayOrder: 2,
    published: true
  },
  {
    slug: "arpeeta",
    name: "Arpeeta",
    designation: "Civil & Family Law",
    photo: null,
    shortBio: "Demo profile highlighting civil matters, family law and client-focused legal research.",
    biography: "This is a fictional demonstration profile created for website preview. Replace with verified professional information before publishing.",
    practiceAreas: ["Civil Law", "Family Law", "Legal Research"],
    education: [],
    experience: [],
    displayOrder: 3,
    published: true
  }
];

export function getPublishedMembers() {
  return members
    .filter((member) => member.published)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getMemberBySlug(slug: string) {
  return getPublishedMembers().find((member) => member.slug === slug);
}
