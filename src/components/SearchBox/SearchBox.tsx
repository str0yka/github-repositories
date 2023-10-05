'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Avatar, Input, Menu } from '~components/ui';
import { MagnifierIcon } from '~components/ui/icons';
import { useSearchQuery, SearchType } from '~graphql';
import { ROUTES } from '~utils/constants';

import s from './SearchBox.module.css';

interface SearchBoxProps {
  onClose: () => void;
}

export const SearchBox = ({ onClose }: SearchBoxProps) => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const { data, loading } = useSearchQuery({
    variables: { first: 50, query: value, type: SearchType.User, size: 32 }
  });

  const users = data?.search.edges;
  const userCount = data?.search.userCount;

  const overlayRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const onClickOverlay = (event: MouseEvent) => {
      if (event.target === overlayRef.current) {
        onClose();
      }
    };

    const onClickEscape = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        const isInputFocused = document.activeElement === inputRef.current;

        if (isInputFocused) {
          return inputRef.current?.blur();
        }

        return onClose();
      }
    };

    overlayRef.current?.addEventListener('click', onClickOverlay);
    window.addEventListener('keydown', onClickEscape);

    return () => {
      overlayRef.current?.removeEventListener('click', onClickOverlay);
      window.removeEventListener('keydown', onClickEscape);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className={s.overlay}
    >
      <div className={s.searchBoxContainer}>
        <Menu>
          <Menu.Group>
            <Input
              ref={inputRef}
              label='Search something...'
              leftIndicator={<MagnifierIcon />}
              pushButton='/'
              pushButtonKey='Slash'
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </Menu.Group>
          <div className={s.listContainer}>
            <Menu.Group>
              {loading && <Menu.GroupTitle>Loading...</Menu.GroupTitle>}
              {!loading && !userCount && <Menu.GroupTitle>No results found</Menu.GroupTitle>}
              {!loading && !!userCount && (
                <Menu.GroupTitle>Found {userCount} results</Menu.GroupTitle>
              )}
            </Menu.Group>
            {!!users?.length && (
              <Menu.Group>
                <Menu.GroupTitle>Users</Menu.GroupTitle>
                {users?.map((user) => {
                  const u = user.node; // for typescript
                  if (u?.__typename !== 'User') return;

                  return (
                    <div
                      key={u.id}
                      aria-hidden='true'
                      className={s.itemContainer}
                      onClick={() => {
                        router.push(ROUTES.PROFILE(u.login));
                        onClose();
                      }}
                    >
                      <Avatar
                        alt={`${u.login}'s avatar`}
                        avatarUrl={u.avatarUrl}
                        size={32}
                      />
                      <div className={s.itemInfoContainer}>
                        <span className={s.itemLogin}>{u.login}</span>
                        {u.name && <span className={s.itemName}>{u.name}</span>}
                      </div>
                    </div>
                  );
                })}
              </Menu.Group>
            )}
          </div>
        </Menu>
      </div>
    </div>
  );
};
