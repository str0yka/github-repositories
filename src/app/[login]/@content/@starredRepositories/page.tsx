import { Group } from '~components/ui';
import { gql, OrderDirection, StarOrderField } from '~graphql';

import { StarredRepository } from './_components';
import StarredRepositoriesNotFound from './not-found';

interface StarredRepositoriesProps {
  params: {
    login: string;
  };
  searchParams: {
    q?: string;
  };
}

const STARRED_REPOSITORIES_QUANTITY = 50;

const StarredRepositories: React.FC<StarredRepositoriesProps> = async ({
  params,
  searchParams
}) => {
  const query = searchParams.q ?? '';
  const starredRepositories = await gql.StarredRepositories({
    login: params.login,
    first: STARRED_REPOSITORIES_QUANTITY,
    orderBy: { field: StarOrderField.StarredAt, direction: OrderDirection.Desc }
  });

  const filtredStarredRepositories = starredRepositories.user?.starredRepositories.edges?.filter(
    (starredRepository) => {
      const isNameIncludesQuery = starredRepository.node.name
        .toLowerCase()
        .includes(query.toLowerCase());
      const isLoginIncludesQuery = starredRepository.node.owner.login
        .toLowerCase()
        .includes(query.toLowerCase());

      return isNameIncludesQuery || isLoginIncludesQuery;
    }
  );

  if (!filtredStarredRepositories?.length) {
    return <StarredRepositoriesNotFound />;
  }

  return filtredStarredRepositories.map((starredRepository) => (
    <Group key={starredRepository.node.url}>
      <StarredRepository
        description={starredRepository.node.description}
        forkCount={starredRepository.node.forkCount}
        login={starredRepository.node.owner.login}
        name={starredRepository.node.name}
        primaryLanguage={starredRepository.node.primaryLanguage}
        repositoryTopics={starredRepository.node.repositoryTopics.nodes}
        stargazerCount={starredRepository.node.stargazerCount}
        starredAt={starredRepository.starredAt}
        url={starredRepository.node.url}
      />
    </Group>
  ));
};

export default StarredRepositories;
