import { Typography } from '~components/ui';

import s from './not-found.module.css';

const StarredRepositoriesNotFound = () => (
  <div className={s.notFoundContainer}>
    <Typography
      comp='h2'
      size={18}
      weight={700}
    >
      Doesn’t have any starred repositories that match.
    </Typography>
  </div>
);

export default StarredRepositoriesNotFound;
