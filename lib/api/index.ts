import type { ApiResponse, Expertise, Work, Publication, NewsItem, SiteSettings, ContactMessage, Pagination } from "@/types";
import settings from "@/data/site-settings.json";
import expertiseData from "@/data/expertise.json";
import workData from "@/data/work.json";
import publicationData from "@/data/publications.json";
import newsData from "@/data/news.json";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "";
const ok = <T,>(data: T, pagination?: Pagination): ApiResponse<T> => ({ success: true, data, ...(pagination ? { pagination } : {}) });
async function request<T>(path: string, fallback: () => T): Promise<ApiResponse<T>> {
  if (!BASE) return ok(fallback());
  const response = await fetch(`${BASE}/api${path}`, { next: { revalidate: 60 } });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return response.json() as Promise<ApiResponse<T>>;
}
export async function getSiteSettings() { return (await request<SiteSettings>("/settings", () => settings as SiteSettings)).data; }
export async function getExpertise() { return (await request<Expertise[]>("/expertise", () => expertiseData as Expertise[])).data.filter(x => x.status === "published").sort((a,b)=>a.order-b.order); }
export async function getExpertiseBySlug(slug: string) { return (await request<Expertise | null>(`/expertise/${slug}`, () => (expertiseData as Expertise[]).find(x=>x.slug===slug) || null)).data; }
export async function getWork() { return (await request<Work[]>("/work", () => workData as Work[])).data.filter(x=>x.status==="published").sort((a,b)=>a.order-b.order); }
export async function getWorkBySlug(slug: string) { return (await request<Work | null>(`/work/${slug}`, () => (workData as Work[]).find(x=>x.slug===slug) || null)).data; }
export async function getPublications(params: {page?:number; limit?:number; category?:string; search?:string} = {}) {
  const page=params.page ?? 1, limit=params.limit ?? 6;
  if (BASE) {
    const query=new URLSearchParams({page:String(page),limit:String(limit),...(params.category?{category:params.category}:{}),...(params.search?{search:params.search}:{})});
    const response=await fetch(`${BASE}/api/publications?${query}`,{next:{revalidate:60}} as RequestInit & {next:{revalidate:number}});
    if(!response.ok) throw new Error(`API request failed: ${response.status}`);
    return response.json() as Promise<ApiResponse<Publication[]>>;
  }
  const all=(publicationData as Publication[]).filter(x=>x.status==="published").filter(x=>!params.category||x.category===params.category).filter(x=>!params.search||`${x.title} ${x.description}`.toLowerCase().includes(params.search.toLowerCase())).sort((a,b)=>b.date.localeCompare(a.date));
  const total=all.length, totalPages=Math.max(1,Math.ceil(total/limit));
  return ok(all.slice((page-1)*limit,page*limit),{page,limit,total,totalPages});
}
export async function getPublicationBySlug(slug:string) { return (await request<Publication|null>(`/publications/${slug}`,()=> (publicationData as Publication[]).find(x=>x.slug===slug)||null)).data; }
export async function getNews() { return (await request<NewsItem[]>("/news",()=>newsData as NewsItem[])).data.filter(x=>x.status==="published").sort((a,b)=>b.date.localeCompare(a.date)); }
export async function submitContact(message: ContactMessage): Promise<ApiResponse<{received:boolean}>> {
  if (!BASE) {
    if (message.website) return {success:true,data:{received:true},message:"Thank you. Your message has been received."};
    return {success:true,data:{received:true},message:"Thank you. Your message has been received."};
  }
  const response=await fetch(`${BASE}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(message)});
  const result=await response.json();
  if(!response.ok) throw new Error(result.message || "Unable to send your message.");
  return result as ApiResponse<{received:boolean}>;
}
