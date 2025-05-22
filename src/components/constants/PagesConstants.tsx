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

export const projects: Project[] = [
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

export const firms: Firm[] = [
  { src: esri, alt: "Esri" },
  { src: uaf, alt: "UAF" },
  { src: altech, alt: "Altech" },
];

export const skills: Skill[] = [
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

export const experiences: Experience[] = [
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