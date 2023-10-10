import { Suspense } from 'react';

import { Input, Menu, Skeleton } from '~components/ui';

import { Profile, ProfileSkeleton } from './_sections';
import s from './page.module.css';

interface ProfilePageProps {
  params: {
    login: string;
  };
  searchParams: {
    tab?: string;
  };
}

const Repositories = () => (
  <Menu>
    <Menu.Group>
      <Input label='Find repository' />
    </Menu.Group>
    <Menu.Group>
      <Input label='Find repository' />
    </Menu.Group>
    <Menu.Group>
      <Input label='Find repository' />
    </Menu.Group>
    <Menu.Group>
      <Input label='Find repository' />
    </Menu.Group>
  </Menu>
);
const Test = () => (
  <Menu>
    <div className={s.skeletonContainer}>
      <Skeleton />
    </div>
  </Menu>
);

const withTabQuery = (tab?: string) => {
  if (!tab) return Test;
  if (tab === 'repositories') return Repositories;
  return () => null;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ params, searchParams }) => {
  const Content = withTabQuery(searchParams.tab);

  return (
    <div className={s.pageContainer}>
      <div className={s.profileContainer}>
        <Suspense fallback={<ProfileSkeleton />}>
          <Profile login={params.login} />
        </Suspense>
      </div>
      <div className={s.contentContainer}>
        <Content />
      </div>
    </div>
  );
};

export default ProfilePage;
