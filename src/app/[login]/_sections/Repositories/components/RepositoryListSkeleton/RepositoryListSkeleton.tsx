import { Group, Skeleton } from '~components/ui';

import s from './RepositoryListSkeleton.module.css';

export const RepositoryListSkeleton = () =>
  Array(10)
    .fill(null)
    .map((_, index) => (
      <Group key={index}>
        <div className={s.repositorySkeletonContainer}>
          <div className={s.repositoryLinkSkeletonContainer}>
            <Skeleton />
          </div>
          <div className={s.repositoryDescriptionSkeletonContainer}>
            <Skeleton />
          </div>
          <div className={s.additionalContainer}>
            <div className={s.additionalItemContainer}>
              <div className={s.additionalItemSkeletonIcon}>
                <Skeleton />
              </div>
              <div className={s.additionalItemSkeletonText}>
                <Skeleton />
              </div>
            </div>
            <div className={s.additionalItemContainer}>
              <div className={s.additionalItemSkeletonIcon}>
                <Skeleton />
              </div>
              <div className={s.additionalItemSkeletonText}>
                <Skeleton />
              </div>
            </div>
            <div className={s.additionalItemContainer}>
              <div className={s.additionalItemSkeletonIcon}>
                <Skeleton />
              </div>
              <div className={s.additionalItemSkeletonText}>
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
      </Group>
    ));
