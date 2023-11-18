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

  const data = await response.json();
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
