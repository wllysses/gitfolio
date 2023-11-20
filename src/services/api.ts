import { getTextBetween } from "@/lib/utils";
import { Repo } from "@/types";

export const getUserData = async (profileName: string) => {
  const response = await fetch(`https://api.github.com/users/${profileName}`, {
    cache: "no-store",
  });

  return await response.json();
};

export const getUserRepos = async (profileName: string, page: number) => {
  const response = await fetch(
    `https://api.github.com/users/${profileName}/repos?per_page=8&page=${page}`,
    {
      cache: "no-store",
    }
  );

  const data = (await response.json()) as Repo[];
  const nextPage = data.length === 0 ? null : page + 1;

  return { data, nextPage };
};

export const getReposWithLanguages = async (profileName: string) => {
  const response = await fetch(
    `https://api.github.com/users/${profileName}/repos`,
    { cache: "no-store" }
  );
  return await response.json();
};

export const getRepoREADME = async (githubAccount: string) => {
  const response = await fetch(
    `https://api.github.com/repos/${githubAccount}/gitfolio-custom/contents/README.md`,
    { headers: { Accept: "application/vnd.github.raw" } }
  );

  if (!response.ok) return null;

  const resultText = await response.text();

  return resultText;
};

export const getREADMERepos = async (githubAccount: string) => {
  const READMEText = await getRepoREADME(githubAccount);
  if (!READMEText) return { data: [], nextPage: null };

  const repos = getTextBetween(READMEText, "<pinned-repos>", "</pinned-repos>");

  const reposArray = repos.trim().split(";");

  const reposResponse = await Promise.allSettled(
    reposArray.map(
      async (repo) =>
        await fetch(`https://api.github.com/repos/${githubAccount}/${repo}`, {
          headers: {
            Authorization:
              "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",
          },
        })
    )
  );

  const reposFound = reposResponse.filter(
    (response) => response.status === "fulfilled"
  );

  const reposData: Repo[] = await Promise.all(
    reposFound.map(
      async (repo) => repo.status === "fulfilled" && repo.value.json()
    )
  );

  return { data: reposData, nextPage: null };
};
