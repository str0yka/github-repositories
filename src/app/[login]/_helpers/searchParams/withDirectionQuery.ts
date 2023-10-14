import { DIRECTIONS } from '~pages/[login]/_constants';

export const withDirectionQuery = <T, K>(sort: unknown, { asc, desc }: { asc: T; desc: K }) => {
  if (sort === DIRECTIONS.ASCENT) return asc;

  return desc;
};
