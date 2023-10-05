import { Flex, Menu } from '~components/ui';

import { Profile } from './_sections';

interface ProfilePageProps {
  params: {
    login: string;
  };
  searchParams: {
    tab?: string;
  };
}

const Repositories = () => <h1>repositories</h1>;
const Test = () => <Menu>menu</Menu>;

const withTabQuery = (tab?: string) => {
  if (!tab) return Test;
  if (tab === 'repositories') return Repositories;
  return () => null;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ params, searchParams }) => {
  const Content = withTabQuery(searchParams.tab);

  return (
    <Flex
      ai='flex-start'
      g={24}
    >
      <Profile login={params.login} />
      <div>
        <Content />
      </div>
    </Flex>
  );
};

export default ProfilePage;
