import { useSearchParams, useRouter } from 'next/navigation';

export const useQueryParams = () => {
  const router = useRouter();
  const queryParams = useSearchParams();

  const setQueryParams = (
    key: string,
    value: string,
    method: Exclude<keyof typeof router, 'prefetch'> = 'replace'
  ) => {
    const newSearchParams = new URLSearchParams(queryParams);

    if (value) {
      newSearchParams.set(key, value);
    } else {
      newSearchParams.delete(key);
    }

    router[method](`?${newSearchParams.toString()}`, { scroll: false });
  };

  return [queryParams, setQueryParams] as const;
};
