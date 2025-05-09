import { USER_ROLE } from '../constant';

export type TUserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

export type TUser = {
  id: string;
  email: string;
  role: TUserRole;
  iat: number;
  exp: number;
};

export type TName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
