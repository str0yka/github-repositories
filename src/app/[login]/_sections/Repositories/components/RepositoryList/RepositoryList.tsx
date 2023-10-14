import { Group } from '~components/ui';
import { gql, OrderDirection, RepositoryOrderField } from '~graphql';
import { DIRECTION_DEFAULT, QUERY_DEFAULT } from '~pages/[login]/_constants';
import { withDirectionQuery } from '~pages/[login]/_helpers';

import { Repository, RepositoriesNotFound } from './components';

interface RepositoriesProps {
  login: string;
  query?: string;
  direction?: string;
}

const REPOSITORIES_QUANTITY = 50;

export const RepositoryList: React.FC<RepositoriesProps> = async ({
  login,
  query = QUERY_DEFAULT,
  direction = DIRECTION_DEFAULT
}) => {
  const directionQuery = withDirectionQuery(direction, {
    asc: OrderDirection.Asc,
    desc: OrderDirection.Desc
  });

  const repositories = await gql.Repositories({
    login,
    first: REPOSITORIES_QUANTITY,
    orderBy: { field: RepositoryOrderField.UpdatedAt, direction: directionQuery }
  });

  const filtredRepositories = repositories.user?.repositories.nodes?.filter((repository) =>
    repository.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!filtredRepositories?.length) {
    return <RepositoriesNotFound />;
  }

  return filtredRepositories.map((repository) => (
    <Group key={repository.url}>
      <Repository
        description={repository.description}
        name={repository.name}
        primaryLanguage={repository.primaryLanguage}
        repositoryTopics={repository.repositoryTopics.nodes}
        stargazerCount={repository.stargazerCount}
        updatedAt={repository.updatedAt}
        url={repository.url}
      />
    </Group>
  ));
};
