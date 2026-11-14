"use client";
export default function ErrorPage({reset}:{error:Error&{digest?:string};reset:()=>void}){return <main className="not-found"><div><p className="eyebrow">SOMETHING WENT WRONG</p><h1 className="heading-xl mt-4">The page could not load.</h1><p className="mt-5 text-muted">Please try again.</p><button className="button-primary mt-8" onClick={()=>reset()}>Try again</button></div></main>}
