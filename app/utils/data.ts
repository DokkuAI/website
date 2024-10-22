import { FeaturesProps } from "../ui/Features";

import { FeatureTag } from "../ui/Features";

export const features: FeaturesProps[] = [
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
    image: "/features/chat.jpg",
    replaces: [
      {
        name: "ChatGPT",
        image: "/competitor-logos/chatgpt.jpg",
        alt: "ChatGPT Logo",
      },
      {
        name: "Jenni",
        image: "/competitor-logos/jenniai.jpg",
        alt: "Jenni Logo",
      },
    ],
  },
  {
    tag: FeatureTag.Write,
    heading:
      "Never write docs, notes or wikis alone, instead use advance AI capabilities.",
    subheading:
      "Allowing users in capturing their thoughts into docs, notes or wikis more efficiently through AI writing assistant subtools in a structured manner. ",
    featureList: [
      "Markdown and LaTeX editors with rich formatting",
      "Add tags for better understanding",
      "Store all the notes/docs at one place",
      "Import markdown, latex or any other format file",
      "Edit, write, paraphrase, or translate using AI",
      "Collaborate seamlessly with other team members",
    ],
    image: "/features/write.jpg",
    replaces: [
      {
        name: "Notion",
        image: "/competitor-logos/notion.jpg",
        alt: "Notion Logo",
      },
      {
        name: "Google Docs",
        image: "/competitor-logos/google-docs.jpg",
        alt: "Google Docs Logo",
      },
      {
        name: "Roam Research",
        image: "/competitor-logos/roam-research.jpg",
        alt: "Roam Research Logo",
      },
    ],
  },
  {
    tag: FeatureTag.Annotate,
    heading: "Making your reading experience super easier with annotation.",
    subheading:
      "Streamlining the reading process with intuitive annotation tools like highlighters, underlines, and strikethroughs, while centralizing feedback and discussions in one place.",
    featureList: [
      "Highlight text, areas, and create sticky notes",
      "Underline and strike through any content",
      "Store all the notes/docs at one place",
      "Tag your peers and also understand who annotated",
      "Add inline comments or discussions with annotations",
      "Collaborate seamlessly with other team members on same annotation document",
    ],
    image: "/features/annotate.jpg",
    replaces: [
      {
        name: "Notion",
        image: "/competitor-logos/notion.jpg",
        alt: "Notion Logo",
      },
      {
        name: "Google Docs",
        image: "/competitor-logos/google-docs.jpg",
        alt: "Google Docs Logo",
      },
      {
        name: "Roam Research",
        image: "/competitor-logos/roam-research.jpg",
        alt: "Roam Research Logo",
      },
    ],
  },
  {
    tag: FeatureTag.Organize,
    heading: "It all starts with storing your documents at one place.",
    subheading:
      "Enabling users to focus more on their previous research and future development objectives by enabling you to keep all documents consolidated in one place.",
    featureList: [
      "Store and organise documents at one place",
      "Use different formats",
      "Chat, write or annotate directly from document database",
      "Tag your peers and also understand who annotated",
      "Export any document in any citation format (research)",
    ],
    image: "/features/organize.jpg",
    replaces: [
      {
        name: "Google Drive",
        image: "/competitor-logos/google-drive.jpg",
        alt: "Google Drive Logo",
      },
      {
        name: "Dropbox",
        image: "/competitor-logos/dropbox.jpg",
        alt: "Dropbox Logo",
      },
      {
        name: "OneDrive",
        image: "/competitor-logos/one-drive.jpg",
        alt: "OneDrive Logo",
      },
    ],
  },
  {
    tag: FeatureTag.Plan,
    heading: "Visualize your strategy with a clear concept map.",
    subheading:
      "Enhance your reading with concept maps like mind maps, organizational charts, and lists to organize research, structure literature reviews, and plan projects.",
    featureList: [
      "Drag-and-drop shapes",
      "Add multiple nodes to clarify relationships and idea flow",
      "Customize themes, colors, nodes shapes and fonts, to create visually appealing diagrams",
    ],
    image: "/features/plan.jpg",
    replaces: [
      {
        name: "Miro",
        image: "/competitor-logos/miro.jpg",
        alt: "Miro Logo",
      },
      {
        name: "LucidPark",
        image: "/competitor-logos/lucid-park.jpg",
        alt: "Lucidpark Logo",
      },
      {
        name: "Mural",
        image: "/competitor-logos/mural.jpg",
        alt: "Mural Logo",
      },
    ],
  },
];
