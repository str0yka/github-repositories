import Link from 'next/link';

import { Group, Typography, Input } from '~components/ui';
import { StarIcon } from '~components/ui/icons';
import { gql, OrderDirection, RepositoryOrderField } from '~graphql';
import { createDate } from '~utils/helpers';

import s from './Repositories.module.css';

interface RepositoriesProps {
  login: string;
}

export const Repositories: React.FC<RepositoriesProps> = async ({ login }) => {
  const repositories = await gql.Repositories({
    login,
    first: 50,
    orderBy: { field: RepositoryOrderField.UpdatedAt, direction: OrderDirection.Desc }
  });

  return (
    <>
      <Group>
        <Input label='Find repository' />
      </Group>
      {repositories.user?.repositories.nodes?.map((repository) => (
        <Group key={repository.url}>
          <div className={s.repositoryContainer}>
            <Link
              className={s.repositoryLink}
              href={repository.url}
            >
              {repository.name}
            </Link>
            {repository.description && (
              <Typography
                color='text-2'
                comp='span'
                size={14}
              >
                {repository.description}
              </Typography>
            )}
            {!!repository.repositoryTopics.nodes?.length && (
              <ul className={s.topicsContainer}>
                {repository.repositoryTopics.nodes.map((repositoryTopic) => (
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
              {repository.primaryLanguage && (
                <div className={s.additionalItemContainer}>
                  <div
                    className={s.primaryLanguageColor}
                    style={{ backgroundColor: repository.primaryLanguage.color }}
                  />
                  <Typography
                    color='text-2'
                    comp='span'
                    size={12}
                  >
                    {repository.primaryLanguage.name}
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
                  {repository.stargazerCount}
                </Typography>
              </div>
              {(() => {
                const todayYear = new Date().getFullYear();
                const { monthDay, monthNameShort, year } = createDate({
                  date: new Date(`${repository.updatedAt}`),
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
        </Group>
      ))}
    </>
  );
};
