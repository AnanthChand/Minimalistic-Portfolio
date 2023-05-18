import React from "react";
import { TypeAnimation } from "react-type-animation";

import { FaGit, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src="/images/ananth.JPG"
        className="w-full h-screen object-cover "
        alt=""
      />
      {/* <div className="bg-white/40 h-screen w-full absolute top-0 right-0 -z-10"/> */}
      <div className="flex flex-col justify-center items-center h-screen w-full absolute top-0 right-0 z-10">
        <h1 className="text-6xl font-bold text-white/95">Ananth Chandra</h1>
        <div>
          <h2 className="text-white/75">
            I'm
            <span> <span> </span>
              <TypeAnimation
                sequence={[
                  " an Author,", 
                  1500, 
                  " a Web Developer,", 
                  2000, 
                  " a Filmmaker,",
                  1000, 
                  () => {
                    console.log("Sequence completed"); 
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "1.5em",
                  display: "inline-block",
                  color: "white",
                  opacity: ".9",
                }}
              />
            </span>
          </h2>
        </div>
        <div className="flex p-1 w-1/6 justify-around text-white/80 ">
          <FaLinkedin/>
          <FaInstagram />
          <FaGit />
        </div>
      </div>
    </div>
  );
};

export default Main;
