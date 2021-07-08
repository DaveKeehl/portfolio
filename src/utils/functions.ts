const port = 3000;
export const localhost = `localhost:${port}`;
export const website = 'https://davideciulla.com';

export const getPrefix = (dev: boolean): string => (dev ? localhost : website);
