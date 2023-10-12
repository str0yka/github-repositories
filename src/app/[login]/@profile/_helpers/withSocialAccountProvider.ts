import { SocialIcons, ChainsIcon } from '~components/ui/icons';
import type { SocialAccountProvider } from '~graphql';

export const withSocialAccountProvider = (provider?: `${SocialAccountProvider}`) => {
  if (!provider) return ChainsIcon;

  if (provider === 'TWITCH') {
    return SocialIcons.Twitch;
  }

  if (provider === 'TWITTER') {
    return SocialIcons.Twitter;
  }

  if (provider === 'YOUTUBE') {
    return SocialIcons.Youtube;
  }

  return ChainsIcon;
};
