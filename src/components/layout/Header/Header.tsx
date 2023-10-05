'use client';

import Link from 'next/link';
import { useState } from 'react';

import { SearchBox } from '~components';
import { Button } from '~components/ui';
import { ConsoleIcon, GitHubIcon, MagnifierIcon } from '~components/ui/icons';
import { ROUTES } from '~utils/constants';

import s from './Header.module.css';

export const Header = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

  return (
    <header className={s.headerContainer}>
      {isSearchBoxOpen && <SearchBox onClose={() => setIsSearchBoxOpen(false)} />}
      <div className={s.headerGroupContainer}>
        <Link href={ROUTES.HOME}>
          <GitHubIcon className={s.logoIcon} />
        </Link>
        <Link href={ROUTES.HOME}>
          <Button variant='transparented'>Repositories</Button>
        </Link>
      </div>
      <div className={s.headerGroupContainer}>
        <div className={s.inputContainer}>
          <Button
            pushButtonKey='Slash'
            variant='outlined'
            onClick={() => setIsSearchBoxOpen(true)}
          >
            <div className={s.buttonInnerContainer}>
              <div className={s.buttonInnerGroupContainer}>
                <MagnifierIcon />
                <Button.Text>Push / to search</Button.Text>
              </div>
              <ConsoleIcon className={s.buttonInnerConsoleIcon} />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};
