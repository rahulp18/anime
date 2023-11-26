import Image from 'next/image';
import React from 'react';
import { MotionDiv } from './MotionDiv';
interface Props {
  data: any;
  index: number;
}
const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Card = ({ data, index }: Props) => {

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * stagger,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${data.image.original}`}
          alt={data.name}
          fill
          className="rounded-xl object-cover"
         
        />
      </div>
      <div className="flex py-4 justify-between gap-2 items-center">
        <h1 className="text-xl text-white line-clamp-1 ">{data.name}</h1>
        <div className="bg-gray-900 p-1 rounded-sm">
          <p className="text-white  capitalize text-xs">{data.kind}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex flex-row items-center gap-2">
          <Image src="/episodes.svg" height={20} width={20} alt="ticket" />
          <p className="text-sm font-semibold text-white">
            {' '}
            {data.episodes || data.episodes_aired}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Image src="/star.svg" height={18} width={18} alt="star" />
          <p className="text-sm font-semibold text-[#FFAD49]"> {data.score}</p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Card;
