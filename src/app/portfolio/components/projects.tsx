"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import { getUserRepos } from "@/services/api";
import { Repo } from "@/types";
import { ProjectCard } from "./project-card";
import { Spinner } from "./spinner";
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  slug: string;
  totalRepos: number;
}

export function Projects({ slug, totalRepos }: ProjectsProps) {
  const [perPage, setPerPage] = useState(8);

  const {
    data: repos,
    isLoading,
    isError,
  } = useQuery<Repo[]>(["repos", perPage], async () =>
    getUserRepos(slug, perPage)
  );

  if (isError) return <div>Algo deu errado...</div>;

  return (
    <section
      id="projects"
      className="mt-28 mb-12 w-full p-2 flex flex-col gap-4 items-center"
    >
      <h2 className="font-bold text-3xl text-center animate-fade-down">
        Meus <span className="text-primary">Projetos</span>
      </h2>
      {isLoading && <Spinner />}
      <div className="w-full my-8 grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 animate-fade-up">
        {repos &&
          repos?.map((repo) => (
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
      {totalRepos === 0 && <div>Nenhum repositório público.</div>}

      {totalRepos > 8 && perPage < totalRepos && (
        <Button
          size="lg"
          className="text-white"
          onClick={() => setPerPage((prevState) => (prevState += 8))}
        >
          Carregar mais
        </Button>
      )}
    </section>
  );
}
