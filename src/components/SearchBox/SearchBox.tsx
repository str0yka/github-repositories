'use client';

import { useEffect, useRef, useState } from 'react';

import { Input } from '~components/ui';
import { MagnifierIcon } from '~components/ui/icons';
import { useSearchQuery, SearchType } from '~graphql';
import { useOnClickKey, useOnClickOutside } from '~utils/hooks';

import s from './SearchBox.module.css';
import { SearchBoxItem } from './components';

interface SearchBoxProps {
  onClose: () => void;
}

export const SearchBox = ({ onClose }: SearchBoxProps) => {
  const [value, setValue] = useState('');

  const { data } = useSearchQuery({
    variables: { first: 50, query: value, type: SearchType.User, size: 32 }
  });

  const searchBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useOnClickOutside(searchBoxRef, onClose);
  useOnClickKey((event) => event.code === 'Escape' && onClose());

  return (
    <div className={s.overlay}>
      <div
        ref={searchBoxRef}
        className={s.searchBoxContainer}
      >
        <SearchBox.Group>
          <Input
            ref={inputRef}
            label='Search something...'
            leftIndicator={<MagnifierIcon />}
            pushButton='/'
            pushButtonKey='Slash'
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </SearchBox.Group>
        <div className={s.listContainer}>
          <SearchBox.Group>
            {!data?.search.edges?.length && (
              <SearchBox.GroupTitle>No results found</SearchBox.GroupTitle>
            )}
            {!!data?.search.edges?.length && (
              <SearchBox.GroupTitle>
                Found {data?.search.edges?.length} results
              </SearchBox.GroupTitle>
            )}
          </SearchBox.Group>
          {!!data?.search.edges?.length && (
            <SearchBox.Group>
              <SearchBox.GroupTitle>Users</SearchBox.GroupTitle>
              <SearchBox.GroupList>
                {data.search.edges?.map((egde) => {
                  if (egde.node?.__typename !== 'User') return;

                  return (
                    <SearchBox.GroupItem
                      key={egde.node.id}
                      avatarUrl={egde.node.avatarUrl as string}
                      login={egde.node.login}
                      name={egde.node.name}
                    />
                  );
                })}
              </SearchBox.GroupList>
            </SearchBox.Group>
          )}
        </div>
      </div>
    </div>
  );
};

interface SearchBoxGroupProps {
  children: React.ReactNode;
}

SearchBox.Group = ({ children }: SearchBoxGroupProps) => (
  <div className={s.groupContainer}>{children}</div>
);

interface SearchBoxGroupTitleProps {
  children: React.ReactNode;
}

SearchBox.GroupTitle = ({ children }: SearchBoxGroupTitleProps) => (
  <h3 className={s.groupTitle}>{children}</h3>
);

interface SearchBoxGroupListProps {
  children: React.ReactNode;
}

SearchBox.GroupList = ({ children }: SearchBoxGroupListProps) => (
  <div className={s.groupListContainer}>{children}</div>
);

SearchBox.GroupItem = SearchBoxItem;
