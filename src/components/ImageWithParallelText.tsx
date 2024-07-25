import React from "react";
import Image from "next/legacy/image";

interface ImageWithParallelTextProps {
  imageSrc: string;
  content: React.ReactNode;
  imageOnLeft?: boolean;
}

const ImageWithParallelText = ({
  imageSrc,
  content,
  imageOnLeft = true,
}: ImageWithParallelTextProps) => {
  const imageComponent = (
    <div className="md:w-1/2">
      <Image
        src={imageSrc}
        alt="Section Image"
        width={500}
        height={400}
        layout="responsive"
      />
    </div>
  );

  const contentComponent = (
    <div className="md:w-1/2 py-10 md:p-28 px-6">{content}</div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row bg-gray-100 ${
        imageOnLeft ? "flex-col-reverse" : ""
      }`}
    >
      {imageOnLeft ? imageComponent : contentComponent}
      {imageOnLeft ? contentComponent : imageComponent}
    </div>
  );
};

export default ImageWithParallelText;
