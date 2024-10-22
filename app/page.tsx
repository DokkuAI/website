import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";
import Features, { FeaturesProps, FeatureTag } from "./ui/Features";

const features: FeaturesProps[] = [
  {
    tag: FeatureTag.Chat,
    heading:
      "Engage deeply and chat with your documents using an AI assistant.",
    subheading:
      "Empowering users to engage with documents conversationally for enhanced understanding and efficient knowledge extraction.",
    featureList: [
      "Ask questions, request summaries, or seek clarifications.",
      "Highlight relevant sections, and figures to chat with.",
      "Convert chats to notes or detailed docs for uncovering new connections.",
    ],
    image: "/chat.jpg",
    replaces: [
      { name: "ChatGPT", image: "/chatgpt.jpg", alt: "ChatGPT Logo" },
      { name: "Jenni", image: "/jenniai.jpg", alt: "Jenni Logo" },
    ],
  },
];

function Page() {
  return (
    <div className="min-h-screen text-gray-800 bg-dot-pattern bg-white backdrop-blur-sm px-4">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <Hero />
        {features.map((feature) => (
          <Features key={feature.tag} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default Page;
