'use client';

import { useEffect, useState } from 'react';

import { Input, SelectMenu } from '~components/ui';
import { MagnifierIcon } from '~components/ui/icons';
import {
  DIRECTIONS,
  DIRECTION_SEARCH_PARAM_NAME,
  QUERY_DEFAULT,
  QUERY_SEARCH_PARAM_NAME
} from '~pages/[login]/_constants';
import { withDirectionQuery } from '~pages/[login]/_helpers';
import { useDebounce, useQueryParams } from '~utils/hooks';

import s from './FilterControl.module.css';

const DIRECTION_OPTIONS = [
  { text: 'Descent', value: DIRECTIONS.DESCENT },
  { text: 'Ascent', value: DIRECTIONS.ASCENT }
];

export const FilterControl = () => {
  const [queryParams, setQueryParams] = useQueryParams();

  const [query, setQuery] = useState(queryParams.get(QUERY_SEARCH_PARAM_NAME) ?? QUERY_DEFAULT);
  const debouncedQuery = useDebounce(query);

  const direction = withDirectionQuery(queryParams.get(DIRECTION_SEARCH_PARAM_NAME), {
    asc: DIRECTIONS.ASCENT,
    desc: DIRECTIONS.DESCENT
  });

  useEffect(() => {
    setQueryParams(QUERY_SEARCH_PARAM_NAME, debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className={s.filterControlContainer}>
      <div className={s.queryControlContainer}>
        <Input
          label='Find repository'
          leftIndicator={<MagnifierIcon />}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <SelectMenu
        defaultValue={direction}
        label='Direction'
        options={DIRECTION_OPTIONS}
        title='Select direction type'
        onSelect={(value) => setQueryParams(DIRECTION_SEARCH_PARAM_NAME, value.toString())}
      />
    </div>
  );
};
