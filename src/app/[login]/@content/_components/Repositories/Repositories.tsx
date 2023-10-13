import { Suspense } from 'react';

import { Group } from '~components/ui';

import { SearchRepository, RepositoryList, RepositoriesLoading } from './components';

type RepositoriesProps = ContentItemProps;

export const Repositories: React.FC<RepositoriesProps> = ({ params, searchParams }) => (
  <>
    <Group>
      <SearchRepository />
    </Group>
    <Suspense fallback={<RepositoriesLoading />}>
      <RepositoryList
        login={params.login}
        query={searchParams.q}
      />
    </Suspense>
  </>
);
