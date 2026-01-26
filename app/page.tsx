import { Hero } from '@/components/sections/Hero';
import { PainPoints } from '@/components/sections/PainPoints';
import { Timeline } from '@/components/sections/Timeline';
import { Agents } from '@/components/sections/Agents';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { WhyExists } from '@/components/sections/WhyExists';
import { SocialProof } from '@/components/sections/SocialProof';
import { Platform } from '@/components/sections/Platform';
import { ResponsibleAI } from '@/components/sections/ResponsibleAI';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Timeline />
      <Agents />
      <WhoItsFor />
      <WhyExists />
      <SocialProof />
      <Platform />
      <ResponsibleAI />
      <FinalCTA />
    </main>
  );
}

