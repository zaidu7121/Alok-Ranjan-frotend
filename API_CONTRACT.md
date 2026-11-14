
# API contract

Base URL: `NEXT_PUBLIC_API_BASE_URL`. The frontend calls `${BASE_URL}/api/...`. Every response uses `{ "success": boolean, "data": ..., "pagination"?: ..., "message"?: string }`. When the environment variable is empty, the adapter reads the local JSON seed files using the same function signatures.

## GET /api/settings
Returns one `SiteSettings` object.
```json
{"success":true,"data":{"_id":"settings-main","name":"Alok Ranjan","tagline":"...","email":"...","phone":"...","linkedin":"...","city":"...","logoText":"AR","intro":"...","heroTitle":"...","heroSubtitle":"...","heroImage":{"url":"/images/hero-architecture.svg","alt":"..."},"portrait":{"url":"/images/portrait-placeholder.svg","alt":"..."},"profilePdf":"/profile/alok-ranjan-profile.pdf","seo":{"title":"...","description":"..."},"createdAt":"2026-01-01T00:00:00.000Z"}}
```

## GET /api/expertise
Returns published expertise sorted by `order`.
## GET /api/expertise/:slug
Returns one expertise record or a 404 envelope.
```json
{"success":true,"data":{"_id":"exp-1","slug":"trademarks","title":"Trademarks","description":"...","scope":"...","icon":"Scale","status":"published","order":1,"image":{"url":"/images/expertise.svg","alt":"..."},"seo":{"title":"...","description":"..."},"createdAt":"2026-01-01T00:00:00.000Z"}}
```

## GET /api/work
Returns published work records.
## GET /api/work/:slug
Returns one work record or a 404 envelope.
```json
{"success":true,"data":{"_id":"work-1","slug":"trademark-clearance-review","title":"Trademark search and clearance review","label":"Representative matter","description":"...","category":"Trademark","status":"published","order":1,"image":{"url":"/images/work-trademark.svg","alt":"..."},"seo":{"title":"...","description":"..."},"createdAt":"2026-01-01T00:00:00.000Z"}}
```

## GET /api/publications
Query params: `page` (1-based integer), `limit` (integer), `category` (exact category, optional), `search` (title/description text, optional). Returns records and pagination.
## GET /api/publications/:slug
Returns one publication record or a 404 envelope.
```json
{"success":true,"data":[{"_id":"publication-1","slug":"personality-rights-ai","title":"Personality rights and artificial intelligence","category":"AI and IP","description":"...","date":"2025-09-12","status":"published","order":1,"image":{"url":"/images/publication.svg","alt":"..."},"seo":{"title":"...","description":"..."},"createdAt":"2025-09-12T00:00:00.000Z"}],"pagination":{"page":1,"limit":6,"total":6,"totalPages":1}}
```

## GET /api/news
Returns published news items sorted newest first.
```json
{"success":true,"data":[{"_id":"news-1","slug":"personality-rights-ai-research","title":"Research contribution on personality rights and AI","category":"Publication","description":"...","date":"2025-09-12","status":"published","order":1,"image":{"url":"/images/publication.svg","alt":"..."},"seo":{"title":"...","description":"..."},"createdAt":"2025-09-12T00:00:00.000Z"}]}
```

## POST /api/contact
Accepts `{name,email,subject,message,website?}`. `website` is a honeypot and should be rejected or silently discarded when non-empty. Validate server-side, rate-limit, and store with `status: "new"` and `createdAt`. Never trust frontend validation alone.
```json
{"name":"A. Example","email":"person@example.com","subject":"Professional enquiry","message":"I would like to ask about ...","website":""}
```
Response:
```json
{"success":true,"data":{"received":true},"message":"Thank you. Your message has been received."}
```

## Model conventions

All content records include `_id`, `slug`, `status`, `order`, `image: {url,alt}`, `seo`, and `createdAt`. `ContactMessage` includes `_id`, `name`, `email`, `subject`, `message`, `status` and `createdAt`.
