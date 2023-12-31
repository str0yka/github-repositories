'use client';

import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Input } from '~components/ui';
import { ROUTES } from '~utils/constants';
import { useDebounce } from '~utils/hooks';

export const QueryControl = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    const login = params.login as string;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('q', debouncedQuery);

    router.replace(`${ROUTES.PROFILE(login)}?${newSearchParams.toString()}`, { scroll: false });
  }, [debouncedQuery]);

  return (
    <Input
      label='Find repository'
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};
