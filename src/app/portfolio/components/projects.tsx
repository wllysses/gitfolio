"use client";

import { useInfiniteQuery } from "react-query";
import { getUserRepos } from "@/services/api";
import { Repo } from "@/types";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters as Spinner } from "react-icons/ai";

interface ProjectsProps {
  slug: string;
  totalRepos: number;
}

export function Projects({ slug, totalRepos }: ProjectsProps) {
  const {
    data: repos,
    isFetching,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<{ data: Repo[]; nextPage: number | null }>({
    queryKey: ["repos"],
    queryFn: async ({ pageParam = 1 }) => await getUserRepos(slug, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  if (isError) return <div>Algo deu errado...</div>;

  return (
    <section
      id="projects"
      className="mt-28 mb-12 w-full p-2 flex flex-col gap-4 items-center"
    >
      <h2 className="font-bold text-3xl text-center animate-fade-down">
        Meus <span className="text-primary">Projetos</span>
      </h2>
      <div className="w-full my-8 grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 animate-fade-up">
        {repos &&
          repos.pages.map((repos) =>
            repos.data.map((repo) => (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                html_url={repo.html_url}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
                language={repo.language}
                homepage={repo.homepage}
              />
            ))
          )}
      </div>
      {totalRepos === 0 && <div>Nenhum repositório público.</div>}
      {hasNextPage && (
        <Button
          size="lg"
          className="text-white w-full md:w-36"
          onClick={() => fetchNextPage()}
        >
          {isFetching ? (
            <Spinner size={20} className="animate-spin" />
          ) : (
            "Carregar mais"
          )}
        </Button>
      )}
    </section>
  );
}
