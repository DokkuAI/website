import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";
import Features from "./ui/Features";
import MoreFeatures from "./ui/MoreFeatures";
import { features } from "./utils/data";
import TestimonialSection from "./ui/Testimonials";
import Faq from "./ui/Faq";
import TeamSection from "./ui/Teams";
import { Footer } from "./ui/Footer";
function Page() {
  return (
    <div className="min-h-screen bg-dot-pattern bg-white backdrop-blur-sm px-4">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <Hero />
        {features.map((feature) => (
          <Features key={feature.tag} {...feature} />
        ))}
        <MoreFeatures />
        <TestimonialSection />
        <TeamSection />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
