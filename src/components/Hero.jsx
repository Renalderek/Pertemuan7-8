import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="px-5 py-32 text-white bg-primary">
      <div className="container grid items-center justify-center mx-auto md:grid-cols-2 md:justify-between">
        <div className="pb-5 hero-info md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">a</span>mrin <br />
            Frontend Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-5 ">
            <a
              href="https://twitter.com/"
              className="inline-block pr-4 text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/"
              className="inline-block pr-4 text-accent hover:text-white"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/"
              className="inline-block pr-4 text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
