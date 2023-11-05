import Link from "next/link";
import { Code2Icon, GitForkIcon, StarIcon } from "lucide-react";
import { Repo } from "@/types";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps extends Repo {}

export function ProjectCard({
  name,
  html_url,
  stargazers_count,
  forks_count,
  language,
  homepage,
}: ProjectCardProps) {
  return (
    <Card className="hover:scale-105 hover:duration-100 hover:shadow-md hover:shadow-primary">
      <CardHeader>
        <CardTitle
          className="whitespace-nowrap overflow-hidden text-ellipsis"
          title={name}
        >
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="w-full flex items-center gap-4">
          <li className="flex items-center gap-1">
            <GitForkIcon />
            {forks_count}
          </li>
          <li className="flex items-center gap-1">
            <StarIcon />
            {stargazers_count}
          </li>
          <li className="flex items-center gap-1">
            <Code2Icon />
            {language}
          </li>
        </ul>

        <div className="mt-4 flex items-center gap-2">
          <Link
            href={html_url}
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            Repositório
          </Link>
          {homepage && (
            <Link
              href={homepage}
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
            >
              Deploy
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
