type Type = 'repositories' | 'users';

export const TYPE_DEFAULT: Type = 'repositories';

export const TYPES = {
  REPOSITORIES: 'repositories',
  USERS: 'users'
} as const;

export const TYPE_SEARCH_PARAM_NAME = 'type';
