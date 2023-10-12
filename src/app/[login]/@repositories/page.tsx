import { Group } from '~components/ui';
import { gql, OrderDirection, RepositoryOrderField } from '~graphql';

import { Repository } from './_components';
import RepositoriesNotFound from './not-found';

interface RepositoriesProps {
  params: {
    login: string;
  };
  searchParams: {
    q?: string;
  };
}

const REPOSITORIES_QUANTITY = 50;

const Repositories: React.FC<RepositoriesProps> = async ({ params, searchParams }) => {
  const query = searchParams.q ?? '';
  const repositories = await gql.Repositories({
    login: params.login,
    first: REPOSITORIES_QUANTITY,
    orderBy: { field: RepositoryOrderField.UpdatedAt, direction: OrderDirection.Desc }
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

export default Repositories;
