import Link from 'next/link';

import { Input } from '~components/ui';
import { GitHubIcon, MagnifierIcon } from '~components/ui/icons';
import { ROUTES } from '~utils/constants';

import s from './Header.module.css';

export const Header = () => (
  <header className={s.headerContainer}>
    <Link href={ROUTES.HOME}>
      <GitHubIcon />
    </Link>
    <div className={s.inputContainer}>
      <Input
        label='Type something...'
        leftIndicator={<MagnifierIcon />}
        pushButton='t'
      />
    </div>
  </header>
);
