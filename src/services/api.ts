export const getUserData = async (profileName: string) => {
  const response = await fetch(`https://api.github.com/users/${profileName}`, {
    cache: "no-store",
  });

  const data = await response.json();

  if (response.ok) {
    return await data;
  }

  return null;
};

export const getUserRepos = async (profileName: string, perPage: number) => {
  const response = await fetch(
    `https://api.github.com/users/${profileName}/repos?per_page=${perPage}`,
    { cache: "no-store" }
  );

  const data = await response.json();

  if (response.ok) {
    return await data;
  }

  return null;
};

export const getReposWithLanguages = async (profileName: string) => {
  const response = await fetch(
    `https://api.github.com/users/${profileName}/repos`,
    { cache: "no-store" }
  );
  const data = await response.json();

  if (response.ok) {
    return await data;
  }

  return null;
};
