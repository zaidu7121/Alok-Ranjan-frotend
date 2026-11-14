import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scale, Search, FileText, PenTool, Network, UserRound, BrainCircuit, Handshake, FileSignature, ClipboardCheck, ShieldCheck, BookOpen, Gavel, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";
import type { Expertise, Work, Publication, NewsItem } from "@/types";
const icons:Record<string,React.ComponentType<{size?:number;strokeWidth?:number}>>={Scale,Search,FileText,PenTool,Network,UserRound,BrainCircuit,Handshake,FileSignature,ClipboardCheck,ShieldCheck,BookOpen,Gavel,Lightbulb};
export function SectionTitle({eyebrow,title,description}:{eyebrow?:string;title:string;description?:string}) {
 return <div className="section-title"><div className="section-rule"/><div className="text-center"><p className="eyebrow">{eyebrow || "ALOK RANJAN"}</p><h2 className="heading-lg">{title}</h2>{description&&<p className="mt-3 max-w-2xl text-muted">{description}</p>}</div><div className="section-rule"/></div>;
}
export function ViewMore({href,label="View More"}:{href:string;label?:string}) { return <Link href={href} className="view-more">{label}<ArrowRight size={16}/></Link>; }
export function ExpertiseTile({item}:{item:Expertise}) {
 const Icon=icons[item.icon]||Scale;
 return <Link href={`/expertise/${item.slug}`} className="expertise-tile"><span className="icon-wrap"><Icon size={25} strokeWidth={1.5}/></span><span className="font-serif text-xl">{item.title}</span><span className="tile-arrow"><ArrowRight size={17}/></span></Link>;
}
export function WorkCard({item}:{item:Work}) { return <Link href={`/work/${item.slug}`} className="work-card group"><div className="relative aspect-[4/3] overflow-hidden"><Image src={item.image.url} alt={item.image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 33vw"/></div><div className="work-caption"><span className="text-xs uppercase tracking-[.16em] text-white/65">{item.label}</span><h3 className="mt-1 font-serif text-xl text-white">{item.title}</h3></div></Link>; }
export function ArticleCard({item}:{item:Publication|NewsItem}) { const href="date" in item?`/publications/${item.slug}`:`/news`; return <article className="article-card"><div className="relative aspect-[16/9] overflow-hidden"><Image src={item.image.url} alt={item.image.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw"/></div><div className="p-6"><p className="eyebrow">{item.category} · {new Date(item.date).toLocaleDateString("en-IN",{month:"short",year:"numeric"})}</p><h3 className="mt-3 font-serif text-2xl leading-snug">{item.title}</h3><p className="mt-3 text-muted line-clamp-3">{item.description}</p><Link className="inline-link mt-5" href={href}>Read more <ArrowRight size={15}/></Link></div></article>; }
export function PageIntro({eyebrow,title,children}:{eyebrow:string;title:string;children?:ReactNode}) { return <header className="page-intro"><p className="eyebrow">{eyebrow}</p><h1 className="heading-xl">{title}</h1>{children&&<div className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{children}</div>}</header>; }
