import {getSiteSettings,getExpertise,getWork,getPublications,getNews} from "@/lib/api";
import {SiteShell} from "@/components/site-shell";
import {HomeClosingSections} from "@/components/home-closing-sections";
import {Hero,WorkSection,PublicationsSection,NewsSection} from "@/components/sections";
import {PracticeAreasSection} from "@/components/practice-areas";
export default async function Home(){const [settings,expertise,work,pubs,news]=await Promise.all([getSiteSettings(),getExpertise(),getWork(),getPublications({limit:6}),getNews()]);return <SiteShell settings={settings}><Hero settings={settings} expertise={expertise}/><PracticeAreasSection/><WorkSection items={work}/><PublicationsSection items={pubs.data}/><NewsSection items={news}/><HomeClosingSections/></SiteShell>}
