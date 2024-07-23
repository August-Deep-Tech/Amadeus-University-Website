import React from 'react';
import Image from 'next/image';

interface CardData {
  imageUrl: string;
  text: string;
}

interface CardProps {
  cards: CardData[];
}

const Card: React.FC<CardProps> = ({ cards }) => {
  return (
    <div className="ContentContainer">
      <div className="flex justify-center pt-[30px]">
        <div className="flex gap-[20px] justify-center">
          {cards.map((card, index) => (
            <div key={index}>
              <div className='relative  w-[11.75rem] h-[6.375rem] sm:w-[18.75rem] sm:h-[9.375rem]'>
                <Image
                  src={card.imageUrl}
                  className="object-cover"
                  fill
                  alt={card.text}
                />
              </div>
              <h1 className="text-center text-xs sm:text-base text-au-100-black w-[160px] md:w-[100%] mx-auto pt-[0.3125rem] font-bold">{card.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
