import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Avatar, Button, Typography } from '~components/ui';
import { BuildingIcon } from '~components/ui/icons';
import { gql } from '~graphql';

import { withSocialAccountProvider } from './_helpers';
import s from './page.module.css';

const getProfile = async (login: string) => {
  try {
    const response = await gql.Profile({ login, socialFirst: 10 });
    if (!response.user) {
      throw new Error('User not found');
    }
    return response.user;
  } catch {
    return notFound();
  }
};

interface ProfileProps {
  params: {
    login: string;
  };
}

const Profile: React.FC<ProfileProps> = async ({ params }) => {
  const profile = await getProfile(params.login);

  return (
    <div className={s.profileContainer}>
      <div className={s.avatarContainer}>
        <Avatar
          alt='avatar'
          avatarUrl={profile.avatarUrl}
          size={300}
        />
      </div>
      <div className={s.usernameContainer}>
        {profile.name && (
          <Typography
            comp='span'
            size={24}
            weight={600}
          >
            {profile.name}
          </Typography>
        )}
        <Typography
          color='text-2'
          comp='span'
        >
          {profile.login}
        </Typography>
      </div>
      <Link href={profile.url}>
        <Button variant='contained'>GitHub</Button>
      </Link>
      <div className={s.followersContainer}>
        <Typography
          color='text-2'
          comp='span'
          size={14}
        >
          <Typography
            comp='span'
            weight={600}
          >
            {profile.followers.totalCount}
          </Typography>{' '}
          followers
        </Typography>
        <Typography
          color='text-2'
          comp='span'
          size={14}
        >
          <Typography
            comp='span'
            weight={600}
          >
            {profile.following.totalCount}
          </Typography>{' '}
          following
        </Typography>
      </div>
      <div className={s.additionalContainer}>
        {profile.location && (
          <Typography
            comp='span'
            size={14}
          >
            {profile.location}
          </Typography>
        )}
        {profile.company && (
          <div className={s.additionalItemContainer}>
            <BuildingIcon className={s.userInfoIcon} />
            <Typography
              comp='span'
              size={14}
            >
              {' '}
              {profile.company}
            </Typography>
          </div>
        )}
        {profile.socialAccounts.edges?.map((edge) => {
          const SocialIcon = withSocialAccountProvider(edge.node?.provider);

          return (
            <Link
              key={edge.node?.provider}
              href={edge.node?.url}
            >
              <div className={s.additionalItemContainer}>
                <SocialIcon className={s.userInfoIcon} />
                <Typography
                  comp='span'
                  size={14}
                >
                  {edge.node?.displayName}
                </Typography>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
