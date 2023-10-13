import Link from 'next/link';

import { Button } from '~components/ui';
import { ROUTES } from '~utils/constants';
import { cn } from '~utils/helpers';

import { checkTabQuery } from './_helpers';
import s from './page.module.css';

interface UnderlineProfileProps {
  params: {
    login: string;
  };
  searchParams: {
    tab?: string;
  };
}

const UnderlineProfile: React.FC<UnderlineProfileProps> = ({ params, searchParams }) => {
  const tab = checkTabQuery(searchParams.tab);

  return (
    <div className={s.tabsContainer}>
      <div className={cn(s.tabItem, tab === 'repositories' && s.tabActive)}>
        <Link href={`${ROUTES.PROFILE(params.login)}?tab=repositories`}>
          <Button variant='transparented'>Repositories</Button>
        </Link>
      </div>
      <div className={cn(s.tabItem, tab === 'stars' && s.tabActive)}>
        <Link href={`${ROUTES.PROFILE(params.login)}?tab=stars`}>
          <Button variant='transparented'>Stars</Button>
        </Link>
      </div>
    </div>
  );
};

export default UnderlineProfile;
