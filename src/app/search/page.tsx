'use client';

import { Input, Typography } from '~components/ui';
import { MagnifierIcon } from '~components/ui/icons';

import s from './page.module.css';

const Search = () => (
  <div className={s.searchPageContainer}>
    <Typography
      comp='span'
      size={36}
      weight={900}
    >
      GitHub Repositories
    </Typography>
    <Input
      label='Search GitHub repositories'
      leftIndicator={<MagnifierIcon />}
    />
  </div>
);

export default Search;
