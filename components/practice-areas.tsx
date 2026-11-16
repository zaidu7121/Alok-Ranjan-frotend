import {
  ShieldCheck,
  Building2,
  UsersRound,
  Landmark,
  Gavel
} from "lucide-react";

const practiceAreas = [
  {
    title: "Intellectual Property Rights",
    description: "Protection of intellectual creations, trademarks, copyrights and innovations.",
    icon: ShieldCheck
  },
  {
    title: "Corporate Laws",
    description: "Legal matters concerning corporate structures, business operations and compliance.",
    icon: Building2
  },
  {
    title: "Family Law",
    description: "Legal matters concerning family relationships, rights and personal affairs.",
    icon: UsersRound
  },
  {
    title: "Civil Law",
    description: "Civil disputes, legal rights, obligations and remedies under applicable law.",
    icon: Landmark
  },
  {
    title: "Criminal Law",
    description: "Legal principles, criminal proceedings and rights under criminal law.",
    icon: Gavel
  }
];

export function PracticeAreasSection() {
  return (
    <section className="practice-section section-pad">
      <div className="mx-auto max-w-content px-5 lg:px-8">

        <div className="practice-heading">
          <div>
            <span className="practice-eyebrow">LEGAL PRACTICE</span>
            <h2>Areas of <span>Practice</span></h2>
          </div>

          <p>
            A considered approach to legal matters across diverse
            areas of practice, guided by research, legal reasoning
            and attention to detail.
          </p>
        </div>

        <div className="practice-grid">
          {practiceAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article className="practice-card" key={item.title}>
                <div className="practice-icon">
                  <Icon size={29} strokeWidth={1.4} />
                </div>

                <div className="practice-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="practice-card-accent" />
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}