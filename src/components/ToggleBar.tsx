"use client";
import React, {useState, useRef, useEffect} from "react";

export interface ToggleBarProps {
  title: string;
  content: React.ReactNode;
}

const ToggleBar: React.FC<ToggleBarProps> = ({title, content}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight || 0);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-t border-black">
      <button
        className="w-full py-8 px-6 flex gap-3 items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl sm:text-3xl md:text-[40px] font-medium ">
          {title}
        </span>
        <span className="text-5xl text-au-burgundy transition-transform duration-300">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{height: `${height}px`}}
      >
        <div ref={contentRef} className="px-6 pb-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ToggleBar;
