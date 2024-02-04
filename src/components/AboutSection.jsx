"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Redux.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>PostgreSQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Curso GIT, Codigo Facilito</li>
        <li>Full Stack Developer, Soy Henry</li>
        <li>Ingenieria en Sistemas Informaticos -En Curso</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Developer, Soy Henry</li>
        <li>Curso GIT, Codigo Facilito</li>
      </ul>
    ),
  },
  {
    title: "Diseño UX/UI",
    id: "diseño",
    content: (
      <ul className="list-disc pl-2">
        <li>Figma</li>
        <li>Metodologías de diseño UX</li>
        <li>Research</li>
        <li>Proto-Persona y User-Persona</li>
        <li>Benchmarking</li>
        <li>Entrevistas, POV & MVP</li>
        <li>Arquitectura de Informacion</li>
        <li>User Flow</li>
        <li>Wireframe</li>
        <li>Patrones de Diseño</li>
        <li>Sistema de Grillas, estandares y guidelines</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/aboutImage.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            I am a Full Stack Developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize,
            HTML, CSS and GIT. I am a fast learner and always looking to expand
            my knowledge and skills. I am a team player and am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("diseño")}
              active={tab === "diseño"}
            >
              Diseño UX/UI
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
