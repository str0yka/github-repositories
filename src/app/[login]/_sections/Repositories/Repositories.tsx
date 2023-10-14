import { Suspense } from 'react';

import { Group } from '~components/ui';

import { RepositoryList, RepositoryListSkeleton, FilterControl } from './components';

type RepositoriesProps = ContentItemProps;

export const Repositories: React.FC<RepositoriesProps> = ({ params, searchParams }) => (
  <>
    <Group>
      <FilterControl />
    </Group>
    <Suspense fallback={<RepositoryListSkeleton />}>
      <RepositoryList
        direction={searchParams.direction}
        login={params.login}
        query={searchParams.q}
      />
    </Suspense>
  </>
);
