import { ChevronDown, CircleArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="hero flex justify-center items-end text-au-white">
        <div>
          <h1 className="text-[20px] leading-[36px] sm:leading-[48px] sm:text-[30px] w-[90%] sm:w-[65%] text-center mx-auto">Defy gravity: Patrick Awuah's address at University of Toronto's convocation on award of Honourary Doctorate</h1>
          <div className="flex justify-center pt-[25px] pb-[50px]">
            <div className="flex gap-[50px]">
              <h1 className="flex gap-[5px]"><CircleArrowRight /> Read Story</h1>
              <h1 className="flex gap-[5px]"><CircleArrowRight /> More stories</h1>
            </div>
          </div>
          <div className="flex justify-center">
            <ChevronDown className="w-7 h-7 text-au-white pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}
