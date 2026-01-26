import { aiRoles, getOtherRoles } from '@/data/aiRoles';
import { RoleHero } from '@/components/ai-role/RoleHero';
import { WhatIDo } from '@/components/ai-role/WhatIDo';
import { HowIHelp } from '@/components/ai-role/HowIHelp';
import { WhenIStepInOut } from '@/components/ai-role/WhenIStepInOut';
import { WorksWellWith } from '@/components/ai-role/WorksWellWith';
import { RoleCTA } from '@/components/ai-role/RoleCTA';
import { OtherRoles } from '@/components/ai-role/OtherRoles';

export default function NightAuditorPage() {
  const role = aiRoles.find((r) => r.slug === 'night-auditor')!;
  const otherRoles = getOtherRoles('night-auditor');

  return (
    <main className="min-h-screen bg-cream-500">
      <RoleHero 
        headline={role.headline}
        subHeadline={role.subHeadline}
        accentWord="24/7!"
      />
      
      <WhatIDo paragraphs={role.whatIDo} />
      
      <HowIHelp 
        bullets={role.howIHelp.bullets}
        closingLine={role.howIHelp.closingLine}
      />
      
      <WhenIStepInOut 
        stepInBullets={role.whenIStepIn.stepInBullets}
        stepBackBullets={role.whenIStepIn.stepBackBullets}
        closingLine={role.whenIStepIn.closingLine}
      />
      
      <WorksWellWith items={role.worksWellWith} />
      
      <RoleCTA 
        title={role.ctaSection.title}
        description={role.ctaSection.description}
      />
      
      <OtherRoles roles={otherRoles} />
    </main>
  );
}
