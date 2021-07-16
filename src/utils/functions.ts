const port = 3000;
export const localhost = `http://localhost:${port}`;
export const website = 'https://davideciulla.com';

// const STILL_PLAYING = true

export const getPrefix = (dev: boolean, STILL_PLAYING = true): string =>
	dev || STILL_PLAYING ? localhost : website;
