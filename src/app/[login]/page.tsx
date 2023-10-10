import { Suspense } from 'react';

import { Profile, ProfileSkeleton, Repositories } from './_sections';
import s from './page.module.css';

interface ProfilePageProps {
  params: {
    login: string;
  };
  searchParams: {
    tab?: string;
  };
}

const withTabQuery = (tab?: string) => {
  if (!tab) return Repositories;
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
        <Content login={params.login} />
      </div>
    </div>
  );
};

export default ProfilePage;
