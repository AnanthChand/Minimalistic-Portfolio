import React from "react";

const ProjectsItems = ({ img, title }) => {
  return (
    <div className="z-[999] relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img
        src={img}
        alt="projects"
        className=" z-[999] rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%] translate-x-[-50%] ">
        <h1 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h1>
        <p>reactjs</p>
        <a href="/">
          <p className="text-center text-sm p-3 rounded-lg bg-white cursor-pointer">More Info</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectsItems;
