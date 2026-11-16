import { SiteLoader } from "@/components/site-loader";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DisclaimerGate } from "@/components/disclaimer-gate";
import type { SiteSettings } from "@/types";
export function SiteShell({settings,children}:{settings:SiteSettings;children:ReactNode}) { return <><SiteLoader/><DisclaimerGate/><a href="#main" className="skip-link">Skip to content</a><SiteHeader settings={settings}/><main id="main">{children}</main><SiteFooter settings={settings}/><FloatingWhatsApp/></>; }


