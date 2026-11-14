export interface SEO { title: string; description: string; image?: string }
export interface ImageAsset { url: string; alt: string }
export interface BaseDocument { _id: string; slug: string; status: "draft" | "published"; order: number; image: ImageAsset; seo: SEO; createdAt: string }
export interface SiteSettings { _id: string; name: string; tagline: string; email: string; phone: string; linkedin: string; city: string; logoText: string; intro: string; heroTitle: string; heroSubtitle: string; heroImage: ImageAsset; portrait: ImageAsset; profilePdf: string; seo: SEO; createdAt: string }
export interface Expertise extends BaseDocument { title: string; description: string; scope: string; icon: string }
export interface Work extends BaseDocument { title: string; label: string; description: string; category: string }
export interface Publication extends BaseDocument { title: string; category: string; description: string; date: string }
export interface NewsItem extends BaseDocument { title: string; category: string; description: string; date: string }
export interface ContactMessage { _id?: string; name: string; email: string; subject: string; message: string; website?: string; status?: "new" | "read" | "archived"; createdAt?: string }
export interface Pagination { page: number; limit: number; total: number; totalPages: number }
export interface ApiResponse<T> { success: boolean; data: T; pagination?: Pagination; message?: string }
