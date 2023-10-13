import { gql } from '~graphql';

const getTitle = (tab?: string) => {
  if (tab === 'stars') return 'Starred Repositories';
  return 'Repositories';
};

export const generateMetadata = async ({
  params,
  searchParams
}: {
  params: { login: string };
  searchParams: { tab?: string };
}) => {
  const username = await gql.Username({ login: params.login });

  const login = username.user?.login ?? params.login;
  const name = username.user?.name ?? params.login;

  const title = getTitle(searchParams.tab);

  return {
    title: `${login} (${name}) / ${title}`
  };
};

const Content = () => null;

export default Content;
