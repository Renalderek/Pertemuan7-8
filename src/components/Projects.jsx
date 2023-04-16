import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog from "../assets/devlog.png";
import getInspirred from "../assets/get-inspirred.png";
import uilogs from "../assets/uilogs.png";

const Projects = () => {
  const projects = [
    {
      img: devlog,
      title: "devlog",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://github.com/arpaulustindi/kuliah-react",
      code: "https://github.com/arpaulustindi/kuliah-react",
    },
    {
      img: uilogs,
      title: "uilogs",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
      live: "https://github.com/arpaulustindi/kuliah-react",
      code: "https://github.com/arpaulustindi/kuliah-react",
    },
    {
      img: cssProjects,
      title: "css projects",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://github.com/arpaulustindi/kuliah-react",
      code: "https://github.com/arpaulustindi/kuliah-react",
    },
    {
      img: getInspirred,
      title: "get Inspirred",
      desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
      live: "https://github.com/arpaulustindi/kuliah-react",
      code: "https://github.com/arpaulustindi/kuliah-react",
    },
  ];

  return (
    <section className="px-5 py-32 text-white bg-primary" id="projects">
      <div className="container grid items-center mx-auto md:grid-cols-2 md:justify-between">
        <div className="mb-5 about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="container grid gap-10 mx-auto projects md:grid-cols-3">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="px-2 py-5 font-bold text-center text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 mr-5 font-bold bg-blue-500 hover:bg-blue-600"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 font-bold bg-blue-700 hover:bg-blue-800"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
