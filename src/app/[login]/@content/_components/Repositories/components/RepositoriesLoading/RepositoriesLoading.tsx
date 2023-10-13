import { Skeleton } from '~components/ui';

import s from './RepositoriesLoading.module.css';

export const RepositoriesLoading = () => (
  <ul className={s.skeletonListContainer}>
    {Array(10)
      .fill(null)
      .map((_, index) => (
        <li
          key={index}
          className={s.skeletonItemContainer}
        >
          <Skeleton />
        </li>
      ))}
  </ul>
);
