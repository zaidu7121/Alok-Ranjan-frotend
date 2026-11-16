import { getSiteSettings } from "@/lib/api";
import { getPublishedMembers } from "@/lib/members";
import { SiteShell } from "@/components/site-shell";
import { MembersDirectory } from "@/components/members-directory";

export default async function MembersPage() {
  const settings = await getSiteSettings();
  const members = getPublishedMembers();

  return (
    <SiteShell settings={settings}>
      <MembersDirectory members={members} />
    </SiteShell>
  );
}
