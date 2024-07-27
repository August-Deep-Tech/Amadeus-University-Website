"use client";

import {useState} from "react";
import Image from "next/image";
import {FaPlay} from "react-icons/fa";

interface VideoComponentProps {
  backgroundImage: string;
  youtubeLink: string;
  height?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

const defaultHeights = {
  default: "h-48",
  sm: "sm:h-64",
  md: "md:h-80",
  lg: "lg:h-96",
  xl: "xl:h-[34.25rem]",
};

const YoutubeVideoBanner: React.FC<VideoComponentProps> = ({
  backgroundImage,
  youtubeLink,
  height = {},
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  const mergedHeights = {...defaultHeights, ...height};
  const heightClasses = Object.values(mergedHeights).join(" ");

  return (
    <div className={`relative w-full ${heightClasses}`}>
      <div
        className="absolute inset-0 bg-cover bg-center cursor-pointer group"
        style={{backgroundImage: `url(${backgroundImage})`}}
        onClick={openModal}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="rounded-full border-2 p-2 sm:p-3 md:p-4 lg:p-8 group-hover:border-gray-300 transition-all duration-300">
            <FaPlay className="text-white text-2xl sm:text-3xl md:text-4xl group-hover:text-gray-300" />
          </div>
          <p className="mt-2 text-white text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-gray-300">
            Watch Video
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              className="absolute -top-8 right-0 text-white text-xl"
              onClick={closeModal}
            >
              Close
            </button>
            <iframe
              className="w-full h-full"
              src={`${youtubeLink}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeVideoBanner;
