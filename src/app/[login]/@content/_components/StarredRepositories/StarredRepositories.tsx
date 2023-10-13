import { Suspense } from 'react';

import { Group } from '~components/ui';

import { SearchRepository, StarredRepositoriesLoading, StarredRepositoryList } from './components';

type StarredRepositoriesProps = ContentItemProps;

export const StarredRepositories: React.FC<StarredRepositoriesProps> = ({
  params,
  searchParams
}) => (
  <>
    <Group>
      <SearchRepository />
    </Group>
    <Suspense fallback={<StarredRepositoriesLoading />}>
      <StarredRepositoryList
        login={params.login}
        query={searchParams.q}
      />
    </Suspense>
  </>
);
