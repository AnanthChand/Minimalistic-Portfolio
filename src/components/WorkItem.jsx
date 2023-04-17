import React from "react";

export default function WorkItem({year,title,duration,details})  { //see details in chatgpt
  return (
    <ol className="flex flex-col md:flex-row relative border-l">
      <li className="mb-10 ml-5">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
        <p className="flex flex-wrap gap-5 flex-row justify-start text-xs md:text-sm">
          <span className="inline-block bg-[#001b5e] text-white py-1 px-2 font-semibold rounded-md">{year}</span>
          <span className=" font-semibold text-lg text-[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">{duration}</span>
          
        </p>
        <p className="text-base my-2 font-normal text-stone-500">{details}</p>
      </li>
    </ol>
  );
}
