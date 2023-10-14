export const DIRECTION_DEFAULT = 'DESC';

export const DIRECTION_TYPES = ['DESC', 'ASC'] as const;

export type Direction = (typeof DIRECTION_TYPES)[number];

export const DIRECTION_OPTIONS = [
  { value: 'DESC', text: 'Descent' },
  { value: 'ASC', text: 'Ascent' }
];
