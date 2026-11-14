import {getSiteSettings,getExpertise,getWork,getPublications,getNews} from "@/lib/api";
import {SiteShell} from "@/components/site-shell";
import {Hero,AboutSection,ExpertiseSection,WorkSection,PublicationsSection,NewsSection} from "@/components/sections";
export default async function Home(){const [settings,expertise,work,pubs,news]=await Promise.all([getSiteSettings(),getExpertise(),getWork(),getPublications({limit:6}),getNews()]);return <SiteShell settings={settings}><Hero settings={settings} expertise={expertise}/><AboutSection settings={settings}/><ExpertiseSection items={expertise}/><WorkSection items={work}/><PublicationsSection items={pubs.data}/><NewsSection items={news}/></SiteShell>}
