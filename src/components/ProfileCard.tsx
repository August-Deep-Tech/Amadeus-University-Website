import React from "react";
import Image from "next/image";

export interface ProfileCardProps {
  name: string;
  position: string;
  imageUrl: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  position,
  imageUrl,
  description,
}) => {
  return (
    <div className="text-au-100-black">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="flex-grow pr-4">
          <h2 className="text-2xl sm:text-3xl leading-tight sm:leading-snug md:leading-[52px] font-bold">
            {name}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-1 pb-2 border-b">
            {position}
          </p>
          <div className="mt-4 text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            <div className="md:float-right ml-4 mb-4">
              <Image
                src={imageUrl}
                alt={name}
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
