import React from "react";
import Image from "next/image";
import { CheckIcon } from "lucide-react";
import ReplaceIcon from "./Replaces";

export enum FeatureTag {
  Chat = "Chat",
  Annotate = "Annotate",
  Plan = "Plan",
}

type FeatureImage = `/${string}.jpg`;

export type Replaces = {
  name: string;
  image: string;
  alt: string;
};

export interface FeaturesProps {
  tag: FeatureTag;
  heading: string;
  subheading: string;
  featureList: string[];
  image: FeatureImage;
  replaces: Replaces[];
}

export default function Features({
  tag,
  heading,
  subheading,
  featureList,
  image,
  replaces,
}: FeaturesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="flex flex-col items-center mx-auto px-4">
        <div className="w-full max-w-5xl">
          <div className="w-full ">
            <div
              className="inline-block border-gray-200 text-sm font-bold mb-4 bg-gray-200 rounded px-2 py-1"
              style={{ borderRadius: "5px" }}
            >
              {tag}
            </div>
          </div>
          <div className="flex mb-8">
            <div className="flex-1">
              <h1
                className={`text-4xl font-bold mb-6 text-black transition-all duration-1000`}
              >
                {heading}
              </h1>
              <p className="text-gray-600 mb-8">{subheading}</p>
            </div>
            <div className="flex-1 ml-8">
              <ul className="space-y-2 mb-8">
                {featureList.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <Image
            src={image}
            alt="AI Chat Interface"
            width={1024}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="flex w-full">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold mr-2 text-black">Replaces:</span>
            {replaces.map((replace) => (
              <ReplaceIcon key={replace.name} {...replace} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
