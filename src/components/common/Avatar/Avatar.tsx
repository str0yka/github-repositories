import Image from 'next/image';

import s from './Avatar.module.css';

interface AvatarProps {
  avatarUrl: string;
  alt: string;
  size: number;
}

export const Avatar: React.FC<AvatarProps> = ({ avatarUrl, alt, size }) => (
  <Image
    alt={alt}
    className={s.avatar}
    height={size}
    src={avatarUrl}
    width={size}
  />
);
