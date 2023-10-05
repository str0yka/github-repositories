export const ROUTES = {
  HOME: '/',
  PROFILE: (login: string) => `/${login}`
} as const;
