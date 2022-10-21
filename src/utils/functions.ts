import { dev } from '$app/environment';

export const getHostname = () => {
	const port = 5173;
	const localhost = `http://localhost:${port}`;
	// const website = 'https://davideciulla.com';
	return dev ? localhost : window.location.hostname;
};

export const deCamelCase = (str: string) =>
	str.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
