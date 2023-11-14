import { Badge } from "@/components/ui/badge";
import { getReposWithLanguages } from "@/services/api";
import { Repo } from "@/types";

interface Props {
  slug: string;
}

export default async function Languages({ slug }: Props) {
  const allRepos: Repo[] = await getReposWithLanguages(slug);

  const reposWithLanguages = allRepos.filter((repo) => repo.language !== null);

  const languages: string[] = [];
  for (const repo of reposWithLanguages) {
    languages.push(repo.language);
  }

  const set = new Set(languages);
  const filteredLanguages = Array.from(set);

  return (
    <div className="mt-2">
      <h3 className="font-semibold">Principais Linguagens</h3>
      <div className="mt-1 w-full flex items-center gap-2 flex-wrap">
        {filteredLanguages &&
          filteredLanguages.slice(0, 5).map((language, index) => (
            <Badge key={index} className="text-white">
              {language}
            </Badge>
          ))}
      </div>
    </div>
  );
}
