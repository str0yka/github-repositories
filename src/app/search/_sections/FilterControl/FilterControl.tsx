'use client';

import { Button, Typography } from '~components/ui';
import {
  LANGUAGE_SEARCH_PARAM_NAME,
  TYPES,
  TYPE_SEARCH_PARAM_NAME
} from '~pages/search/_constants';
import { useQueryParams } from '~utils/hooks';

import s from './FilterControl.module.css';

export const FilterControl = () => {
  const [, setQueryParams] = useQueryParams();

  return (
    <div className={s.filterControlContainer}>
      <div className={s.filterControlGroup}>
        <Typography
          comp='h2'
          size={14}
          weight={600}
        >
          Filter by
        </Typography>
        <div className={s.filterControlGroupList}>
          <Button
            variant='transparented'
            onClick={() => setQueryParams(TYPE_SEARCH_PARAM_NAME, TYPES.REPOSITORIES)}
          >
            Repositories
          </Button>
          <Button
            variant='transparented'
            onClick={() => setQueryParams(TYPE_SEARCH_PARAM_NAME, TYPES.USERS)}
          >
            Users
          </Button>
        </div>
      </div>
      <div className={s.filterControlGroup}>
        <Typography
          comp='h2'
          size={14}
          weight={600}
        >
          Filter by
        </Typography>
        <div className={s.filterControlGroupList}>
          <Button
            variant='transparented'
            onClick={() => setQueryParams(LANGUAGE_SEARCH_PARAM_NAME, 'JavaScript')}
          >
            JavaScript
          </Button>
          <Button
            variant='transparented'
            onClick={() => setQueryParams(LANGUAGE_SEARCH_PARAM_NAME, 'TypeScript')}
          >
            TypeScript
          </Button>
        </div>
      </div>
    </div>
  );
};
