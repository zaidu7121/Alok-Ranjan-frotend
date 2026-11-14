import Link from "next/link";
export default function NotFound(){return <main className="not-found"><div><p className="eyebrow">404 · PAGE NOT FOUND</p><h1 className="heading-xl mt-4">This page is unavailable.</h1><p className="mt-5 text-muted">The address may have changed or the page may no longer exist.</p><Link className="button-primary mt-8" href="/">Return to home</Link></div></main>}
