"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Redux.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>PostgreSQL</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Curso GIT, Codigo Facilito</li>
        <li>Full Stack Developer, Soy Henry</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Full Stack Developer, Soy Henry</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/aboutImage.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            Soy Desarrolladora Full Stack con una gran pasion por crear
            aplicaciones web interactivas y responsivas. Tengo experiencia
            trabajando con JavaScript, React, Redux, Node.js, Express,
            PostgreSQL, Sequelize, HTML, CSS y GIT. Aprendo rápido y siempre
            busco ampliar mis conocimientos y habilidades. Soy una jugadora de
            equipo y estoy emocionada de trabajar con otros para crear
            aplicaciones increíbles.{" "}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
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
