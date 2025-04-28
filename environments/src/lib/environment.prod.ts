import { baseEnvironment } from './base';

export const environmentProd = {
  ...baseEnvironment,
  production: true,
  apiUrl: 'https://65009f9718c34dee0cd53786.mockapi.io',
  authDomain: 'dev-auth.seudominio.com',
};
