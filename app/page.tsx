import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { PainPoints } from '@/components/sections/PainPoints';
import { Agents } from '@/components/sections/Agents';
import { Timeline } from '@/components/sections/Timeline';
import { SocialProof } from '@/components/sections/SocialProof';
import { Platform } from '@/components/sections/Platform';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <Agents />
      <Timeline />
      <SocialProof />
      <Platform />
      <FAQ />
      <Footer />
    </main>
  );
}

