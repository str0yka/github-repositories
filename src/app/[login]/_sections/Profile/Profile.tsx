import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Avatar, Button, Flex, Typography } from '~components/ui';
import { BuildingIcon, LinkIcon, TwitchIcon, TwitterIcon, YouTubeIcon } from '~components/ui/icons';
import { SocialAccountProvider, gql } from '~graphql';

import s from './Profile.module.css';

interface ProfileProps {
  login: string;
}

export const Profile: React.FC<ProfileProps> = async ({ login }) => {
  const profile = await (async () => {
    try {
      const response = await gql.Profile({ login, socialFirst: 10 });
      if (!response.user) {
        throw new Error('User not found');
      }
      return response.user;
    } catch {
      return notFound();
    }
  })();

  return (
    <Flex
      d='column'
      g={16}
    >
      <Avatar
        alt='avatar'
        avatarUrl={profile.avatarUrl}
        size={300}
      />
      <Flex d='column'>
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
      </Flex>
      <Link href={profile.url}>
        <Button variant='contained'>GitHub</Button>
      </Link>
      <Flex
        d='row'
        g={8}
      >
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
      </Flex>
      <Flex
        d='column'
        g={4}
      >
        {profile.location && (
          <Typography
            comp='span'
            size={14}
          >
            {profile.location}
          </Typography>
        )}
        {profile.company && (
          <Flex
            ai='center'
            g={6}
          >
            <BuildingIcon className={s.userInfoIcon} />
            <Typography
              comp='span'
              size={14}
            >
              {' '}
              {profile.company}
            </Typography>
          </Flex>
        )}
        {profile.socialAccounts.edges?.map((edge) => (
          <Link
            key={edge.node?.provider}
            href={edge.node?.url}
          >
            <Flex
              ai='center'
              g={6}
            >
              {(() => {
                const provider = edge.node?.provider;
                if (provider === SocialAccountProvider.Twitter) {
                  return <TwitchIcon className={s.userInfoIcon} />;
                }

                if (provider === SocialAccountProvider.Twitch) {
                  return <TwitterIcon className={s.userInfoIcon} />;
                }

                if (provider === SocialAccountProvider.Youtube) {
                  return <YouTubeIcon className={s.userInfoIcon} />;
                }

                return <LinkIcon className={s.userInfoIcon} />;
              })()}
              <Typography
                comp='span'
                size={14}
              >
                {edge.node?.displayName}
              </Typography>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
