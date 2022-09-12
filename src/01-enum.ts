export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role: ROLES;
}

const luisUser: User = {
  username: 'luisMega',
  role: ROLES.ADMIN,
}
