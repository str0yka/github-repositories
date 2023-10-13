export const withTabQuery = <T, K>(
  tab: unknown,
  { repositories, stars }: { repositories: T; stars: K }
) => {
  if (tab === 'stars') return stars;

  return repositories;
};
