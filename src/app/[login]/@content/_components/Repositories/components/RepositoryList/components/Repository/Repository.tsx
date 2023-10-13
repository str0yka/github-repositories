import Link from 'next/link';

import { Typography } from '~components/ui';
import { StarIcon } from '~components/ui/icons';
import { createDate } from '~utils/helpers';

import s from './Repository.module.css';

interface RepositoryProps {
  url: string;
  name: string;
  description?: string;
  repositoryTopics?: ReadonlyArray<{
    topic: { name: string };
  }>;
  primaryLanguage?: {
    color?: string;
    name: string;
  };
  stargazerCount: number;
  updatedAt: string;
}

export const Repository: React.FC<RepositoryProps> = ({
  url,
  name,
  description,
  repositoryTopics,
  primaryLanguage,
  stargazerCount,
  updatedAt
}) => (
  <div className={s.repositoryContainer}>
    <Link
      className={s.repositoryLink}
      href={url}
    >
      {name}
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
      {(() => {
        const todayYear = new Date().getFullYear();
        const { monthDay, monthNameShort, year } = createDate({
          date: new Date(`${updatedAt}`),
          locale: 'en-US'
        });

        return (
          <Typography
            color='text-2'
            comp='span'
            size={12}
          >
            Updated on {monthNameShort} {monthDay}
            {year === todayYear ? '' : `, ${year}`}
          </Typography>
        );
      })()}
    </div>
  </div>
);
