import { createElement } from 'react';

import s from './Typography.module.css';

type TypographyComponents = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

type TypographyProps<Tag extends TypographyComponents> = {
  comp: Tag;
  size?: number | 'inherit';
  weight?: number | 'light' | 'normal' | 'bold' | 'inherit';
  color?: 'text-1' | 'text-2';
} & React.ComponentProps<Tag>;

export const Typography = <Tag extends TypographyComponents>({
  comp,
  size = 'inherit',
  weight = 'normal',
  color = 'text-1',
  children,
  ...props
}: TypographyProps<Tag>) =>
  createElement(
    comp,
    {
      ...props,
      className: s[color],
      style: { fontSize: size, fontWeight: weight }
    },
    children
  );
