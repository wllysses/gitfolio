export const getUserData = async (profileName: string) => {
  const response = await fetch(`https://api.github.com/users/${profileName}`, {
    cache: "no-store",
  });
  return await response.json();
};

export const getUserRepos = async (profileName: string) => {
  const response = await fetch(
    `https://api.github.com/users/${profileName}/repos`,
    { cache: "no-store" }
  );
  return await response.json();
};
