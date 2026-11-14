import type { Metadata } from "next";
import { Inter,Playfair_Display } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/app/jsonld";
import { getSiteSettings } from "@/lib/api";
const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const playfair=Playfair_Display({subsets:["latin"],variable:"--font-playfair",display:"swap"});
export async function generateMetadata():Promise<Metadata>{const s=await getSiteSettings();const base=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000";return {metadataBase:new URL(base),title:{default:s.seo.title,template:`%s | ${s.name}`},description:s.seo.description,openGraph:{title:s.seo.title,description:s.seo.description,type:"website",images:[s.seo.image||"/images/hero-architecture.svg"]},twitter:{card:"summary_large_image",title:s.seo.title,description:s.seo.description}}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${playfair.variable}`}>{children}<StructuredData/></body></html>}
