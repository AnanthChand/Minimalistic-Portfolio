import React from "react";
import { useState } from "react";
import {
  AiOutlineBook,
  AiOutlineBuild,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";

const SideNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
    console.log(setNav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className=" absolute md:hidden top-4 right-4 z-[999]"
      />

      {nav ? (
        <div className=" z-[999] flex flex-col items-center justify-center bg-white w-full h-screen">
          <a onClick= {handleNav}
            href="#main"
            className="z-[999] m-1 flex justify-center items-center py-2 px-4  bg-white text-black w-2/4 rounded-full shadow-gray-600 shadow-lg hover:scale-110 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-1 focus:ring-offset-2 "
          >
            <AiOutlineHome />
            <span className="pl-5 z-[999]">Home</span>
          </a>
          <a onClick= {handleNav}
            href="#work"
            className="z-[999] m-1 flex justify-center items-center py-2 px-4  bg-white text-black w-2/4 rounded-full shadow-gray-600 shadow-lg hover:scale-110 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-1 focus:ring-offset-2 "
          >
            <AiOutlineBuild />
            <span className="pl-5 z-[999]">Works</span>
          </a>
          <a onClick= {handleNav}
            href="#projects"
            className="z-[999] m-1 flex justify-center items-center py-2 px-4  bg-white text-black w-2/4 rounded-full shadow-gray-600 shadow-lg hover:scale-110 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-1 focus:ring-offset-2 "
          >
            <AiOutlineProject />
            <span className="z-[999] pl-5">Projects</span>
          </a>
          <a onClick= {handleNav}
            href="#resume"
            className="z-[999] m-1 flex justify-center items-center py-2 px-4  bg-white text-black w-2/4 rounded-full shadow-gray-600 shadow-lg hover:scale-110 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-1 focus:ring-offset-2 "
          >
            <AiOutlineBook />
            <span className="z-[999] pl-5">Resume</span>
          </a>
          <a onClick= {handleNav}
            href="#contacts"
            className="z-[999] m-1 flex justify-center items-center py-2 px-4  bg-white text-black w-2/4 rounded-full shadow-gray-600 shadow-lg hover:scale-110 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-1 focus:ring-offset-2 "
          >
            <AiOutlineContacts />
            <span className="z-[999] pl-5">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[30%] z-[99]">
        <div className="flex flex-col justify-center z-[99]">
          <a
            href="#main"
            className="ml-2 rounded-full hover:scale-110 transition ease-in duration-200 focus:ring-1 focus:ring-offset-2 p-2 shadow-gray-600 shadow-lg"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#works"
            className="ml-2 rounded-full hover:scale-110 transition ease-in duration-200 focus:ring-1 focus:ring-offset-2 p-2 shadow-gray-600 shadow-lg"
          >
            <AiOutlineBuild size={20} />
          </a>
          <a
            href="#projects"
            className="ml-2 rounded-full hover:scale-110 transition ease-in duration-200 focus:ring-1 focus:ring-offset-2 p-2 shadow-gray-600 shadow-lg"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#resume"
            className="ml-2 rounded-full hover:scale-110 transition ease-in duration-200 focus:ring-1 focus:ring-offset-2 p-2 shadow-gray-600 shadow-lg"
          >
            <AiOutlineBook size={20} />
          </a>
          <a
            href="#contacts"
            className="ml-2 rounded-full hover:scale-110 transition ease-in duration-200 focus:ring-1 focus:ring-offset-2 p-2 shadow-gray-600 shadow-lg"
          >
            <AiOutlineContacts size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
