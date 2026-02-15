import { HeroSection } from "../sections/home/HeroSection";
import { VideoStrip } from "../sections/home/VideoStrip";
import { WhatWeOffer } from "../sections/home/WhatWeOffer";
import { ZeroInvestment } from "../sections/home/ZeroInvestment";
import { CTABlock } from "../sections/home/CTABlock";

export function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <VideoStrip />
      <WhatWeOffer />
      <ZeroInvestment />
      <CTABlock />
    </div>
  );
}
