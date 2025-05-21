import React from "react";
import map from "../../assets/map.png";
import microservices from "../../assets/microservices.jpg";
import database from "../../assets/database.jpg";
import esri from "../../assets/esri.png";
import uaf from "../../assets/uaf.jpg";
import altech from "../../assets/altech.jpeg";
import java from "../../assets/java.png";
import nodejs from "../../assets/nodejs.png";
import typescript from "../../assets/typescript.png";
import react from "../../assets/react.png";
import js from "../../assets/js.png";
import python from "../../assets/python.png";
import postgres from "../../assets/postgres.png";
import mongo from "../../assets/mongo.png";
import nestjs from "../../assets/nestjs.png";
import oracle from "../../assets/oracle.png";
import bootstrap from "../../assets/bootstrap.png";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons CSS is imported

// TypeScript interfaces for type safety
interface Project {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface Firm {
  src: string;
  alt: string;
}

interface Skill {
  src: string;
  alt: string;
}

interface Experience {
  icon: string;
  title: string;
  description: string;
}

// Metadata for projects, firms, and skills
const projects: Project[] = [
  {
    src: map,
    alt: "Map Application",
    title: "Map Application",
    description: "Creating snapshots and 3D objects onto the map.",
  },
  {
    src: microservices,
    alt: "Microservices Development",
    title: "Microservices Development",
    description:
      "Creating multiservices to break down complex systems into manageable and independent components.",
  },
  {
    src: database,
    alt: "Database Project",
    title: "Database Structure",
    description:
      "Managing and optimizing data storage for efficient retrieval and processing.",
  },
];

const firms: Firm[] = [
  { src: esri, alt: "Esri" },
  { src: uaf, alt: "UAF" },
  { src: altech, alt: "Altech" },
];

const skills: Skill[] = [
  { src: java, alt: "Java" },
  { src: nodejs, alt: "NodeJs" },
  { src: typescript, alt: "TypeScript" },
  { src: react, alt: "React" },
  { src: js, alt: "JavaScript" },
  { src: python, alt: "Python" },
  { src: postgres, alt: "Postgres" },
  { src: mongo, alt: "Mongo" },
  { src: nestjs, alt: "NestJs" },
  { src: oracle, alt: "Oracle" },
  { src: bootstrap, alt: "Bootstrap" },
];

const iconClasses: Experience[] = [
  {
    icon: "bi-terminal",
    title: "Web Development",
    description:
      "Used different framework to develop web pages. Using JAVA springboot and NestJs to do data processing and communication with various systems. And used Angular, React, Vue to create user interface and data displaying.",
  },
  {
    icon: "bi-database",
    title: "Database Design",
    description:
      "Create schema for DB structure in different projects. For instance, building up a DB structure for trading account and application, revising the DB structure from the previous system and optimise it.",
  },
  {
    icon: "bi-file-earmark-text",
    title: "Reporting Create",
    description:
      "Create reports for displaying data to both external and internal users. Mainly used jasper studio and JS library such as Handlebars.",
  },
];

export const About = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');
        `}
      </style>

      <div className="tw:text-center">
        {/* Profile Section */}
        <div className="div-bg tw:p-14 tw:rounded-lg tw:max-w-[1100px] tw:mx-auto tw:text-center tw:mt-12 tw:relative">
          <div className="div-bg tw:rounded-full tw:mx-auto tw:w-30 tw:h-30 tw:absolute tw:left-[43.6%] tw:top-[-50px]"></div>
          <img
            src="https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg"
            className="tw:w-24 tw:h-24 tw:rounded-full tw:mx-auto tw:mb-4 tw:object-cover tw:absolute tw:left-[45%] tw:top-[-40px]"
            alt="Profile"
          />
          <div
            className="div-subtitle tw:text-2xl tw:mt-6 tw:mb-6 tw:font-extrabold "
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Nelson Ng Lok Yin
          </div>
          <div>
            Hi! I'm a Software Developer with 2 - 3 years of experience working
            in various firms. Welcome to my online portfolio! Check out my
            previous experience and tech stack.
          </div>
        </div>

        {/* Projects Section */}
        <div className="div-bg tw:p-14 tw:rounded-lg tw:max-w-[1100px] tw:mx-auto tw:text-center tw:mt-12">
          <div
            className="div-subtitle tw:text-2xl tw:mb-6 tw:font-extrabold "
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Featured Projects
          </div>
          <div>
            Brief intro goes here. My main experience lies in developing
            services and layout for different systems. And able to use different
            framework on different projects.
          </div>
          <div className="tw:flex tw:justify-around tw:mt-4">
            {projects.map((project, index) => (
              <div key={index} className="tw:basis-1/3 tw:p-2">
                <img
                  src={project.src}
                  className="tw:w-full tw:h-48 tw:object-cover tw:rounded-lg"
                  alt={project.alt}
                  loading="lazy"
                />
                <div className="tw:font-extrabold tw:text-left tw:text-xl  tw:mt-2">
                  {project.title}
                </div>
                <div className="tw:text-left tw:mt-2">
                  {project.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Firms Section */}
        <div className="div-bg tw:p-14 tw:rounded-lg tw:max-w-[1100px] tw:mx-auto tw:text-center tw:mt-12">
          <div
            className="div-subtitle tw:text-2xl tw:mb-6 tw:font-extrabold "
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Firms I Worked In
          </div>
          <div className="tw:mt-2 tw:flex tw:justify-around">
            {firms.map((firm, index) => (
              <div key={index} className="tw:basis-1/3 tw:p-2">
                <img
                  src={firm.src}
                  className="tw:w-full tw:h-48 tw:object-cover tw:rounded-lg"
                  alt={firm.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="tw:mt-6">
            <div
              className="div-subtitle tw:text-2xl tw:mb-6 tw:font-extrabold "
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Skills & Experience
            </div>
            <div className="tw:mt-2">
              Listed below are the proficiencies I am presently cultivating in
              both front-end and back-end disciplines.
            </div>
            <div className="tw:mt-8 tw:flex tw:justify-evenly tw:flex-wrap">
              {skills.map((skill, index) => (
                <div key={index} className="tw:basis-auto tw:p-2">
                  <img
                    src={skill.src}
                    className="tw:object-contain tw:rounded-lg"
                    alt={skill.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="tw:flex tw:justify-around tw:p-8">
              {iconClasses.map((iconClass, index) => (
                <div key={index} className="tw:text-center tw:flex-1">
                  <i
                    className={`${iconClass.icon} tw:text-[24px] tw:border-2 tw:p-2 tw:overflow-hidden tw:rounded-full`}
                  ></i>
                  <div className="tw:mt-4">{iconClass.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
