import { ProjectCard } from "./project-card";
import { Repo } from "@/types";

interface ProjectsProps {
  data: Repo[];
}

export function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="mt-28 w-full p-2">
      <h2 className="font-bold text-3xl text-center animate-fade-down">
        Meus <span className="text-primary">Projetos</span>
      </h2>
      <div className="my-8 grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 animate-fade-up">
        {data &&
          data.map((repo) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              html_url={repo.html_url}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              language={repo.language}
              homepage={repo.homepage}
            />
          ))}
      </div>
    </section>
  );
}
