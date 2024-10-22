import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";
import Features from "./ui/Features";
import MoreFeatures from "./ui/MoreFeatures";
import { features } from "./utils/data";
import TestimonialSection from "./ui/Testimonials";
import Faq from "./ui/Faq";
import TeamSection from "./ui/Teams";
import { Footer } from "./ui/Footer";
import { Waitlist } from "./ui/Waitlist";

function Page() {
  return (
    <div className="min-h-screen bg-dot-pattern bg-white backdrop-blur-sm px-4">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <Hero />
        <Waitlist />
        {features.map((feature) => (
          <Features key={feature.tag} {...feature} />
        ))}
        <Waitlist />
        <MoreFeatures />
        <TestimonialSection />
        <TeamSection />
        <Faq />
        <Waitlist />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
