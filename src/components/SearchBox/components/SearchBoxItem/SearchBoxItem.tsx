import Image from 'next/image';

import s from './SearchBoxItem.module.css';

interface SearchBoxItemProps {
  login: string;
  name?: string;
  avatarUrl: string;
}

export const SearchBoxItem: React.FC<SearchBoxItemProps> = ({ login, name, avatarUrl }) => (
  <article className={s.itemContainer}>
    <Image
      alt={`${login}'s avatar`}
      className={s.avatar}
      height={32}
      src={avatarUrl}
      width={32}
    />
    <div className={s.infoContainer}>
      <span className={s.login}>{login}</span>
      {name && <span className={s.name}>{name}</span>}
    </div>
  </article>
);
