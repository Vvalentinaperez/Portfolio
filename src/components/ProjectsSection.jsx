import ProjectsCard from "./ProjectsCard";

const projectsData = [
  {
    id: 1,
    title: "React Project Rick and Morty",
    description: "Detail of the characters of the series",
    image: "/projects/pr1.jpeg",
    gitUrl: "https://github.com/Vvalentinaperez/RickAndMorty.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Project Pokemon App",
    description:
      "Application with information about Pokemon and the possibility of creating new ones",
    image: "/projects/pr2.jpeg",
    gitUrl: "https://github.com/Vvalentinaperez/PI-Pokemon.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Black Group Design",
    description: "page for purchasing furniture and hiring decoration services",
    image: "/projects/pr3.jpeg",
    gitUrl: "https://github.com/bgdesign23",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
