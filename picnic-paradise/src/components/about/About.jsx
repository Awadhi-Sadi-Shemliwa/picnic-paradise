"use client";
import { HeroSection } from "./HeroSection";
import { OurStory } from "./OurStory";
import { SignatureExperiences } from "./SignatureExperiences";
import { TestimonialSlider } from "./TestimonialSlider";
import { Timeline } from "./Timeline";
import { CTASection } from "./CTASection";

const About = () => {
  return (
    <main className="font-[Inter] min-h-screen w-screen bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300 text-[#FFF] overflow-x-hidden">
      <HeroSection />
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <OurStory />
        <SignatureExperiences />
        <TestimonialSlider />
        <Timeline />
        <CTASection />
      </div>
    </main>
  );
};

export default About;
