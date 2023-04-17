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
        <h1 className="text-6xl font-bold text-white/75">Ananth Chandra</h1>
        <div>
          <h2 className="text-white/75">
            I'm
            <span> <span> </span>
              <TypeAnimation
                sequence={[
                  " an Author,", // Types 'One'
                  1500, // Waits 1s
                  " a Web Developer,", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  " a Filmmaker,",
                  1000, // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "1.5em",
                  display: "inline-block",
                  color: "white",
                  opacity: ".5",
                }}
              />
            </span>
          </h2>
        </div>
        <div className="flex p-1 w-1/6 justify-around">
          <FaLinkedin />
          <FaInstagram />
          <FaGit />
        </div>
      </div>
    </div>
  );
};

export default Main;
