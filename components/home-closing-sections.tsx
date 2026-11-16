import Link from "next/link";
import { ArrowUpRight, Scale, Lightbulb, BookOpen, MoveUpRight } from "lucide-react";

const perspectives = [
  {
    number: "01",
    category: "INTELLECTUAL PROPERTY",
    title: "The evolving value of ideas",
    description:
      "Exploring how intellectual property frameworks respond to innovation, creativity and changing commercial realities.",
    icon: Lightbulb,
  },
  {
    number: "02",
    category: "TECHNOLOGY & LAW",
    title: "Law in a changing digital world",
    description:
      "Considering emerging legal questions around artificial intelligence, digital platforms and new technologies.",
    icon: Scale,
  },
  {
    number: "03",
    category: "LEGAL RESEARCH",
    title: "Beyond the written word",
    description:
      "A research-led perspective on legal interpretation, intellectual inquiry and the development of sound arguments.",
    icon: BookOpen,
  },
];

export function HomeClosingSections() {
  return (
    <>
      <section className="closing-insights">
        <div className="mx-auto max-w-content px-5 lg:px-8">
          <div className="closing-heading">
            <div>
              <span className="closing-eyebrow">THOUGHT LEADERSHIP</span>
              <h2>Ideas that shape<br />legal perspectives.</h2>
            </div>
            <p>
              A closer look at the questions, developments and ideas
              influencing the world of intellectual property law.
            </p>
          </div>

          <div className="closing-card-grid">
            {perspectives.map((item) => {
              const Icon = item.icon;
              return (
                <article className="closing-topic-card" key={item.number}>
                  <div className="closing-card-top">
                    <span>{item.number}</span>
                    <Icon size={23} strokeWidth={1.35} />
                  </div>
                  <span className="closing-card-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="closing-card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="closing-perspective">
        <div className="closing-perspective-inner">
          <div className="closing-perspective-mark">
            <span />
            <span />
            <span />
          </div>
          <div className="closing-perspective-content">
            <span className="closing-eyebrow">A PROFESSIONAL PERSPECTIVE</span>
            <h2>
              Clarity in thought.
              <br />
              Purpose in practice.
            </h2>
            <p>
              An approach to intellectual property law grounded in research,
              considered analysis and an appreciation of the ideas that
              shape our world.
            </p>
            <Link href="/about" className="closing-text-link">
              Discover more about Alok <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="closing-side-note">
            <span>RESEARCH</span>
            <i />
            <span>REASONING</span>
            <i />
            <span>IP LAW</span>
          </div>
        </div>
      </section>

      <section className="closing-contact">
        <div className="closing-contact-inner">
          <div>
            <span className="closing-eyebrow">LET&apos;S CONNECT</span>
            <h2>
              Have a question
              <br />
              worth exploring?
            </h2>
            <p>
              For professional enquiries, legal discussions and
              meaningful conversations, get in touch.
            </p>
          </div>
          <Link href="/contact" className="closing-contact-button">
            Start a conversation
            <MoveUpRight size={19} />
          </Link>
        </div>
        <div className="closing-contact-bottom">
          <span>ALOK RANJAN</span>
          <span>INTELLECTUAL PROPERTY LAW</span>
        </div>
      </section>
    </>
  );
}


