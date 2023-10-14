import { Suspense } from 'react';

import { Group } from '~components/ui';

import { QueryControl, StarredRepositoryListSkeleton, StarredRepositoryList } from './components';

type StarredRepositoriesProps = ContentItemProps;

export const StarredRepositories: React.FC<StarredRepositoriesProps> = ({
  params,
  searchParams
}) => (
  <>
    <Group>
      <QueryControl />
    </Group>
    <Suspense fallback={<StarredRepositoryListSkeleton />}>
      <StarredRepositoryList
        login={params.login}
        query={searchParams.q}
      />
    </Suspense>
  </>
);
