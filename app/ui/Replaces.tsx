import React from "react";
import Image from "next/image";
import { Replaces } from "./Features";

const ReplaceIcon: React.FC<Replaces> = ({ name, image, alt }) => {
  return (
    <div className="flex items-center space-x-2 rounded-lg">
      <div className="flex-shrink-0">
        <Image src={image} alt={alt} width={30} height={30} />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-gray-700">{name}</h2>
      </div>
    </div>
  );
};

export default ReplaceIcon;
