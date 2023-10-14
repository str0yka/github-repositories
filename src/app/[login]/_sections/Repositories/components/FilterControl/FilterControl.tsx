'use client';

import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Input, SelectMenu } from '~components/ui';
import { ROUTES } from '~utils/constants';
import { useDebounce } from '~utils/hooks';

import { withDirectionQuery } from '../../../../_helpers';

import s from './FilterControl.module.css';
import { DIRECTION_OPTIONS } from './constants';

export const FilterControl = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const debouncedQuery = useDebounce(query);

  const direction = withDirectionQuery(searchParams.get('direction'), { asc: 'ASC', desc: 'DESC' });

  const login = params.login as string;

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('q', debouncedQuery);

    router.replace(`${ROUTES.PROFILE(login)}?${newSearchParams.toString()}`, { scroll: false });
  }, [debouncedQuery]);

  return (
    <div className={s.filterControlContainer}>
      <div className={s.queryControlContainer}>
        <Input
          label='Find repository'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <SelectMenu
        defaultValue={direction}
        label='Direction'
        options={DIRECTION_OPTIONS}
        title='Select direction type'
        onSelect={(value) => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set('direction', value.toString());

          router.replace(`${ROUTES.PROFILE(login)}?${newSearchParams.toString()}`, {
            scroll: false
          });
        }}
      />
    </div>
  );
};
