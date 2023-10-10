import { Skeleton } from '~components/ui';

import s from './ProfileSkeleton.module.css';

export const ProfileSkeleton = () => (
  <div className={s.profileContainer}>
    <div className={s.avatarContainer}>
      <Skeleton />
    </div>
    <div className={s.usernameContainer}>
      <div className={s.loginSkeletonContainer}>
        <Skeleton />
      </div>
    </div>
    <div className={s.profileButtonSkeletonContainer}>
      <Skeleton />
    </div>
    <div className={s.followersContainer}>
      <div className={s.additionalTextSkeletonContainer}>
        <Skeleton />
      </div>
      <div className={s.additionalTextSkeletonContainer}>
        <Skeleton />
      </div>
    </div>
    <div className={s.additionalContainer}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={s.additionalItemContainer}
          >
            <div className={s.additionalIconSkeletonContainer}>
              <Skeleton />
            </div>
            <div className={s.additionalTextSkeletonContainer}>
              <Skeleton />
            </div>
          </div>
        ))}
    </div>
  </div>
);
