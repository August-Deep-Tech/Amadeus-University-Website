import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardData {
    imageUrl: string;
    text: string;
    desc: string;
}

interface CardProps {
    cards: CardData[];
}

const Card: React.FC<CardProps> = ({ cards }) => {
    return (
        <div className="ContentContainer">
            <div className="flex lg:justify-center pt-[30px]">
                <div className="flex flex-col lg:flex-row gap-[30px] justify-center">
                    {cards.map((card, index) => (
                        <div key={index} className='sm:w-[15rem]'>
                            <h1 className="text-lg sm:text-[22px] text-au-100-black pb-[25px] font-bold">{card.text}</h1>
                            <div className='relative w-[100%] h-[200px]  sm:w-[15rem] sm:h-[10.375rem]'>
                                <Image
                                    src={card.imageUrl}
                                    className="object-cover"
                                    fill
                                    alt={card.text}
                                />
                            </div>
                            <p className="text-lg font-light py-[20px] ">
                                {card.desc}
                            </p>
                            <Link href="" className="text-lg font-light text-au-burgundy">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
