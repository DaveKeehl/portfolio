import { dev } from '$app/environment';

const port = 5173;
export const localhost = `http://localhost:${port}`;
export const website = 'https://davideciulla.com';

export const getPrefix = (): string => (dev ? localhost : website);
