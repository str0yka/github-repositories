export const checkTabQuery = (tab?: string) => {
  if (tab === 'stars') return tab;

  return 'repositories';
};
