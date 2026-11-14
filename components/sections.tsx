"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight,Scale,Search,FileText,PenTool,Network,UserRound,BrainCircuit,Handshake } from "lucide-react";
import { Swiper,SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import type { SiteSettings,Expertise,Work,Publication,NewsItem } from "@/types";
import { ArticleCard,ExpertiseTile,SectionTitle,ViewMore,WorkCard } from "@/components/ui";
const heroIcons=[Scale,Search,FileText,PenTool,Network,UserRound,BrainCircuit,Handshake];
export function Hero({settings,expertise}:{settings:SiteSettings;expertise:Expertise[]}) {
 const reduce = useReducedMotion();

 const slides = [
  {
   image:"/images/supreme-court.jpg",
   alt:"Supreme Court themed architectural photograph",
   eyebrow:"JUSTICE • CONSTITUTION • RULE OF LAW",
   title:"Upholding the Principles of Justice",
   description:"A thoughtful understanding of legal principles, constitutional values and the rule of law."
  },
  {
   image:"/images/patna-high-court.jpg",
   alt:"Patna High Court themed architectural photograph",
   eyebrow:"LEGAL PRINCIPLES • RESEARCH • REASONING",
   title:"A Commitment to Legal Excellence",
   description:"Approaching legal questions with careful research, clear reasoning and attention to detail."
  },
  {
   image:"/images/courtroom-gavel.jpg",
   alt:"Courtroom and judge gavel",
   eyebrow:"LEGAL RESEARCH • ADVOCACY",
   title:"Research. Reasoning. Representation.",
   description:"A considered approach to legal research, analysis and the development of sound legal arguments."
  },
  {
   image:"/images/scales-of-justice.jpg",
   alt:"Scales of justice and law books",
   eyebrow:"INTELLECTUAL PROPERTY LAW",
   title:"Protecting Ideas and Creative Work",
   description:"Exploring the legal protection of brands, inventions, creative works and emerging technologies."
  }
 ];

 return <section className="hero relative w-full overflow-hidden bg-[#17243D]">
  <Swiper
   modules={[A11y,Keyboard,Autoplay,Pagination]}
   className="hero-carousel"
   loop
   speed={900}
   keyboard={{enabled:true}}
   autoplay={reduce ? false : {
    delay:5000,
    disableOnInteraction:false,
    pauseOnMouseEnter:false
   }}
   pagination={{clickable:true}}
   a11y={{enabled:true}}
  >
   {slides.map((slide,i)=><SwiperSlide key={slide.image}>
    <div className="relative flex relative aspect-video w-full overflow-hidden">
     <Image
      src={slide.image}
      alt={slide.alt}
      fill
      priority={i===0}
      sizes="100vw"
      className="object-contain"
     />
     <div className="absolute inset-0 bg-gradient-to-r from-[#101B30]/95 via-[#17243D]/75 to-[#17243D]/15"/>
     <div className="absolute inset-0 bg-gradient-to-t from-[#101B30]/45 via-transparent to-[#101B30]/10"/>
     <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-14 pt-12 lg:px-8">
      <div className="max-w-2xl">
       <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-10 bg-[#C6A66B]"/>
        <p className="text-[10px] font-semibold tracking-[0.24em] text-[#E2C58D] sm:text-xs">
         {slide.eyebrow}
        </p>
       </div>
       <h1 className="max-w-2xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        {slide.title}
       </h1>
       <p className="mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8 md:text-lg">
        {slide.description}
       </p>
       <div className="mt-9 flex items-center gap-3">
        <span className="h-1 w-12 bg-[#C6A66B]"/>
        <span className="text-[10px] tracking-[0.2em] text-white/65">
         {settings.name.toUpperCase()}
        </span>
       </div>
      </div>
     </div>
    </div>
   </SwiperSlide>)}
  </Swiper>
 </section>;
}
export function AboutSection({settings}:{settings:SiteSettings}) {
 return <section className="section-pad"><div className="mx-auto grid max-w-content gap-12 px-5 md:grid-cols-[.85fr_1.15fr] md:items-center lg:px-8"><div className="portrait-frame"><Image src={settings.portrait.url} alt={settings.portrait.alt} fill sizes="(max-width:768px) 100vw, 40vw" className="object-contain"/></div><div><SectionTitle eyebrow="ABOUT ME" title="A considered approach to IP law"/><p className="mt-8 text-muted leading-8">I am an early-career intellectual property lawyer based in India. My work and research focus on the legal and commercial questions that arise around brands, inventions, creative works and emerging technologies.</p><p className="mt-4 text-muted leading-8">My academic training and internship experience have included trademark prosecution, search analysis and research across evolving areas of intellectual property law.</p><div className="credential-grid mt-8"><div><strong>B.A. LL.B.</strong><span>New Law College, Pune</span></div><div><strong>Rank 9 / 171</strong><span>CGPA 8.3</span></div><div><strong>AIBE qualified</strong><span>Diploma in Intellectual Property Rights</span></div></div><div className="mt-8 flex flex-wrap items-center gap-5"><a href={settings.profilePdf} className="button-primary" target="_blank" rel="noreferrer">Download Profile <ArrowRight size={16}/></a><ViewMore href="/about"/></div></div></div></section>;
}
export function ExpertiseSection({items}:{items:Expertise[]}) { return <section className="section-pad bg-cream"><div className="mx-auto max-w-content px-5 lg:px-8"><SectionTitle eyebrow="EXPERTISE" title="Areas of focus" description="Research and practical support across established IP rights and developing areas of law."/><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map(item=><ExpertiseTile key={item._id} item={item}/>)}</div><div className="mt-9 text-center"><ViewMore href="/expertise"/></div></div></section>; }
export function WorkSection({items}:{items:Work[]}) { return <section className="section-pad"><div className="mx-auto max-w-content px-5 lg:px-8"><SectionTitle eyebrow="MY WORK" title="Selected work and research" description="Anonymised examples of research and support. Each item is presented as a representative matter."/><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{items.slice(0,3).map(item=><WorkCard key={item._id} item={item}/>)}</div><div className="mt-9 text-center"><ViewMore href="/work"/></div></div></section>; }
function CarouselSection({title,eyebrow,items,href}:{title:string;eyebrow:string;items:(Publication|NewsItem)[];href:string}) {
 return <section className="section-pad bg-cream"><div className="mx-auto max-w-content px-5 lg:px-8"><SectionTitle eyebrow={eyebrow} title={title}/><div className="mt-12"><Swiper modules={[A11y,Keyboard]} keyboard={{enabled:true}} a11y={{prevSlideMessage:"Previous item",nextSlideMessage:"Next item"}} spaceBetween={24} slidesPerView={1.05} breakpoints={{640:{slidesPerView:2},1024:{slidesPerView:3}}}>{items.slice(0,6).map(item=><SwiperSlide key={item._id}><ArticleCard item={item}/></SwiperSlide>)}</Swiper></div><div className="mt-9 text-center"><ViewMore href={href}/></div></div></section>;
}
export function PublicationsSection({items}:{items:Publication[]}) { return <CarouselSection title="Ideas, analysis and publications" eyebrow="KNOWLEDGE" items={items} href="/publications"/>; }
export function NewsSection({items}:{items:NewsItem[]}) { return <CarouselSection title="Updates and appearances" eyebrow="NEWS AND MEDIA" items={items} href="/news"/>; }





