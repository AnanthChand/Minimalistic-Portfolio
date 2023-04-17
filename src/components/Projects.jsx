import React from "react";
import ProjectsItems from "./ProjectsItems";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 z-[999]">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit quae
        at illo veritatis sint nisi deleniti ullam eveniet perspiciatis
        inventore non, voluptate laborum. Obcaecati nam illum maxime harum
        ducimus.
      </p>
      <div className="grid sm:grid-cols-2 gap-12 z-[999]">
        <ProjectsItems img={img1} title='Giltas eye'/>
        <ProjectsItems img={img2} title='Sambhram '/>
        <ProjectsItems img={img3} title='Sum-it'/>
        <ProjectsItems img={img4} title="TaaraPyaar"/>
      </div>
    </div>
  );
};

export default Projects;
