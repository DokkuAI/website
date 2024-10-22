import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="py-11">
      <div className="mx-auto px-4">
        <h1
          className={`text-center text-4xl font-bold mb-6 text-black transition-all duration-1000`}
        >
          All this, and much more
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Whether it's our unbeatable security, seamless integrations, or
          unmatched ease of use, here are more reasons you should switch to
          DokkuAI today.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <FeatureCard
            title="Create Multiple Workspaces"
            description="Play across multiple workspace to avoid any disruption and reduce workload for working with different files."
            imageSrc="/features/multiple-workspaces.jpg"
          />
          <FeatureCard
            title="Multiple Formats Supported"
            description="Supports the most commonly used document formats used by people such as, URL, PDF, DOCX, TXT, MDOWN, EPUB & PPTX."
            imageSrc="/features/multiple-formats.jpg"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Multiple AI Models"
            description="Limitlessly use the best and most powerful AI models in the industry, including GPT-4 and Claude 3.5 Sonnet, with no usage limit."
            imageSrc="/features/ai-models.jpg"
          />
          <FeatureCard
            title="Bring Your Own Key (BYOK)"
            description="Connect different AI models to DokkuAI with your own API key via OpenRouter."
            imageSrc="/features/byok.jpg"
          />
          <FeatureCard
            title="Unbreakable Data Security"
            description="Your data is yours, and we're committed to keeping it that way. We know how crucial security is for researchers, which is why it's our highest priority at DokkuAI."
            imageSrc="/features/data-security.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg border border-gray-200 max-h-[458px]">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="font-weight-bold text-md mb-6">{description}</p>
      <Image
        src={imageSrc}
        alt={title}
        width={528}
        height={320}
        className="w-auto h-auto rounded-md"
      />
    </div>
  );
}
