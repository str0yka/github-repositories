import Link from 'next/link';

import { Typography } from '~components/ui';
import { StarIcon } from '~components/ui/icons';
import { createDate } from '~utils/helpers';

import s from './StarredRepository.module.css';

interface StarredRepositoryProps {
  name: string;
  url: string;
  description?: string;
  stargazerCount: number;
  forkCount: number;
  starredAt: string;
  login: string;
  primaryLanguage?: {
    name: string;
    color?: string;
  };
  repositoryTopics?: ReadonlyArray<{
    topic: { name: string };
  }>;
}

export const StarredRepository: React.FC<StarredRepositoryProps> = ({
  name,
  url,
  description,
  stargazerCount,
  forkCount,
  starredAt,
  login,
  primaryLanguage,
  repositoryTopics
}) => (
  <div className={s.repositoryContainer}>
    <Link
      className={s.repositoryLink}
      href={url}
    >
      {login} / {name}
    </Link>
    {description && (
      <Typography
        color='text-2'
        comp='span'
        size={14}
      >
        {description}
      </Typography>
    )}
    {!!repositoryTopics?.length && (
      <ul className={s.topicsContainer}>
        {repositoryTopics.map((repositoryTopic) => (
          <li
            key={repositoryTopic.topic.name}
            className={s.topicsItem}
          >
            {repositoryTopic.topic.name}
          </li>
        ))}
      </ul>
    )}
    <div className={s.additionalContainer}>
      {primaryLanguage && (
        <div className={s.additionalItemContainer}>
          <div
            className={s.primaryLanguageColor}
            style={{ backgroundColor: primaryLanguage.color }}
          />
          <Typography
            color='text-2'
            comp='span'
            size={12}
          >
            {primaryLanguage.name}
          </Typography>
        </div>
      )}

      <div className={s.additionalItemContainer}>
        <StarIcon className={s.additionalItemIcon} />
        <Typography
          color='text-2'
          comp='span'
          size={12}
        >
          {stargazerCount}
        </Typography>
      </div>
      <div className={s.additionalItemContainer}>
        <StarIcon className={s.additionalItemIcon} />
        <Typography
          color='text-2'
          comp='span'
          size={12}
        >
          {forkCount}
        </Typography>
      </div>
      {(() => {
        const todayYear = new Date().getFullYear();
        const { monthDay, monthNameShort, year } = createDate({
          date: new Date(`${starredAt}`),
          locale: 'en-US'
        });

        return (
          <Typography
            color='text-2'
            comp='span'
            size={12}
          >
            Starred at {monthNameShort} {monthDay}
            {year === todayYear ? '' : `, ${year}`}
          </Typography>
        );
      })()}
    </div>
  </div>
);
