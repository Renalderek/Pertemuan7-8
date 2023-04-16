import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="px-5 py-32 text-white bg-secondery" id="about">
      <div className="container grid items-center justify-center mx-auto md:grid-cols-2 md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>
          <p className="pb-5">
            Hi,My Name Reinalto . im a Fullstack Developer.I Build beautifull
            websites with react and tailwind css.
          </p>
          <p className="pb-5">
            I am have a skill in frontend developer like react.js,Redux,AXIOS
            Tailwind CSS,SaSS,CSS3 and many more
          </p>

          <p>In Backend I know Node.js,Express.js,MongoDB,and Mongoose</p>
          <p>
            {" "}
            In My spare time i Create Youtube Videos and write Blog on my blog .
            Where I talk about programming theory and build various projects
          </p>
        </div>
        <div className="about-img">
          <img
            src={AboutImg}
            alt="Coding Illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
