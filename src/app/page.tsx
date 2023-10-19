import { Typography } from '~components/ui';

import s from './page.module.css';

const Home = () => (
  <div className={s.pageContainer}>
    <Typography
      comp='h1'
      size={36}
      weight={900}
    >
      GitHub Repositories
    </Typography>
    <Typography
      color='text-2'
      comp='h1'
      size={18}
      weight={600}
    >
      Push [ / ] to find users
    </Typography>
  </div>
);

export default Home;
