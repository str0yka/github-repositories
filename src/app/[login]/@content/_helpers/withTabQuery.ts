export const withTabQuery = (
  tab: string,
  {
    repositories,
    starredRepositories
  }: {
    repositories: React.ReactNode;
    starredRepositories: React.ReactNode;
  }
) => {
  if (tab === 'stars') return starredRepositories;
  return repositories;
};
