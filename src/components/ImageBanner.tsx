import React from "react";
import Image from "next/image";

interface ImageBannerProps {
  src: string;
  alt?: string;
}

const ImageBanner: React.FC<ImageBannerProps> = ({src, alt = "Image"}) => {
  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[33.25rem]">
      <Image
        src={src}
        fill
        alt={alt}
        className="object-cover object-center"
        sizes="(max-width: 640px) 100vw,
               (max-width: 768px) 80vw,
               (max-width: 1024px) 70vw,
               60vw"
      />
    </div>
  );
};

export default ImageBanner;
