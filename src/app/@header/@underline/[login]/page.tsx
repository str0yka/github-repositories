import { Button } from '~components/ui';
import { cn } from '~utils/helpers';

import s from './page.module.css';

const UnderlineProfile = () => (
  <div className={s.tabsContainer}>
    <div className={cn(s.tabItem, s.tabActive)}>
      <Button variant='transparented'>Repositories</Button>
    </div>
  </div>
);

export default UnderlineProfile;
