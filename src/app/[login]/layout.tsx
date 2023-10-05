'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { ROUTES } from '~utils/constants';

interface ProfileLayoutProps {
  params: {
    login: string;
  };
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ params, children }) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  return (
    <>
      <div>
        <Link href={{ pathname: ROUTES.PROFILE(params.login) }}>
          {!tab ? <b>profile</b> : 'profile'}
        </Link>
        <Link href={{ pathname: ROUTES.PROFILE(params.login), query: { tab: 'repositories' } }}>
          {tab === 'repositories' ? <b>repositories</b> : 'repositories'}
        </Link>
      </div>
      {children}
    </>
  );
};

export default ProfileLayout;
