import ProjectsCard from "./ProjectsCard";

const projectsData = [
  {
    id: 1,
    title: "React Project Rick and Morty",
    description: "Detail of the characters of the series",
    image: "/projects/pr1.jpeg",
    gitUrl: "https://github.com/Vvalentinaperez/RickAndMorty.git",
    previewUrl:
      "https://drive.google.com/file/d/13Tgl-6Uq253Aap01V7lWCYm0iafdVGL7/view?usp=drive_link",
  },
  {
    id: 2,
    title: "React Project Pokemon App",
    description:
      "Application with information about Pokemon and the possibility of creating new ones",
    image: "/projects/pr2.jpeg",
    gitUrl: "https://github.com/Vvalentinaperez/PI-Pokemon.git",
    previewUrl:
      "https://drive.google.com/file/d/1H0AodNlEbtJAu8l8iQzlmjuhxPSXX0Vd/view?usp=drive_link",
  },
  {
    id: 3,
    title: "E-commerce Black Group Design",
    description: "page for purchasing furniture and hiring decoration services",
    image: "/projects/pr3.jpeg",
    gitUrl: "https://github.com/bgdesign23",
    previewUrl:
      "https://drive.google.com/file/d/1w9X4ZjYUwVsD_1wQI9Ex9W-LnqFYDlBw/view?usp=drive_link",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        Projects
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
    </section>
  );
};

export default ProjectsSection;
