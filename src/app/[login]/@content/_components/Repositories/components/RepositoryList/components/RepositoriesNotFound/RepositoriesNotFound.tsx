import { Typography } from '~components/ui';

import s from './RepositoriesNotFound.module.css';

export const RepositoriesNotFound = () => (
  <div className={s.notFoundContainer}>
    <Typography
      comp='h2'
      size={18}
      weight={700}
    >
      Doesn’t have any repositories that match.
    </Typography>
  </div>
);
