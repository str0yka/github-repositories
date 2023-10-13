import { gql } from '~graphql';

import { withTabQuery } from '../_helpers';

import { Repositories, StarredRepositories } from './_components';

export const generateMetadata = async ({
  params,
  searchParams
}: {
  params: { login: string };
  searchParams: { tab?: string };
}) => {
  const { login } = params;

  const username = await gql.Username({ login });

  const name = username.user?.name ?? login;

  const title = withTabQuery(searchParams.tab, {
    repositories: 'Repositories',
    stars: 'Starred Repositories'
  });

  return {
    title: `${login} (${name}) / ${title}`
  };
};

interface ContentProps {
  params: {
    login: string;
  };
  searchParams: Record<string, string>;
}

const Content: React.FC<ContentProps> = ({ params, searchParams }) => {
  const ContentWithTabQuery = withTabQuery(searchParams.tab, {
    repositories: Repositories,
    stars: StarredRepositories
  });

  return (
    <ContentWithTabQuery
      params={params}
      searchParams={searchParams}
    />
  );
};

export default Content;
