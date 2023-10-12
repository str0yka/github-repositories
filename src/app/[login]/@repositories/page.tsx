import { Group } from '~components/ui';
import { gql, OrderDirection, RepositoryOrderField } from '~graphql';

import { SearchRepository, Repository } from './_components';

interface RepositoriesProps {
  params: {
    login: string;
  };
  searchParams: {
    q?: string;
  };
}

const REPOSITORIES_QUANTITY = 10;

const Repositories: React.FC<RepositoriesProps> = async ({ params, searchParams }) => {
  const repositories = await gql.Repositories({
    login: params.login,
    first: REPOSITORIES_QUANTITY,
    orderBy: { field: RepositoryOrderField.UpdatedAt, direction: OrderDirection.Desc }
  });

  const query = searchParams.q ?? '';

  return (
    <>
      <Group>
        <SearchRepository />
      </Group>
      {repositories.user?.repositories.nodes
        ?.filter((repository) => repository.name.toLowerCase().includes(query.toLowerCase()))
        .map((repository) => (
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
        ))}
    </>
  );
};

export default Repositories;
