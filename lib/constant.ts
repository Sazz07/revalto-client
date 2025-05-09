export const AUTH_TOKEN_KEY = 'ACCESS_TOKEN';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const USER_ROLE = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;

export const userRole = Object.values(USER_ROLE);
