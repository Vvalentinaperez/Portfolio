import React from "react";
import ProjectsCard from "./ProjectsCard";
import { DesingCard } from "./DesingCard";

const projectsDesing = [
  {
    id: 1,
    title: "Black Group Desing Model",
    description: "Ecommerce layout for a furniture and interior design store.",
    image: "/desing/bgdesing.jpeg",
    urlFigma:
      "https://www.figma.com/file/Bu4SYLP0ZymXwcYciIkaBd/Black-Group-Desing?type=design&node-id=0%3A1&mode=design&t=rD4F8CpMEH7ZoDoe-1",
  },
  {
    id: 2,
    title: "Fv Showroom Model",
    description: "Ecommerce layout for a clothing and accessories store.",
    image: "/desing/fvdesing.jpeg",
    urlFigma:
      "https://www.figma.com/file/Lfn1QQcdGWfbSQsQYTMFJY/Untitled?type=design&node-id=0%3A1&mode=design&t=tXsL2Ne4WzWsV1Dx-1",
  },
];
const DesingSection = () => {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        Models
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsDesing.map((project) => (
          <DesingCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            urlFigma={project.urlFigma}
          />
        ))}
      </div>
    </section>
  );
};

export default DesingSection;
