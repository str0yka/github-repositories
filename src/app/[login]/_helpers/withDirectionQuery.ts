export const withDirectionQuery = <T, K>(sort: unknown, { asc, desc }: { asc: T; desc: K }) => {
  if (sort === 'ASC') return asc;

  return desc;
};
