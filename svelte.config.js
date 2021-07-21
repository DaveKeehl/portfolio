import preprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		target: '#svelte', // hydrate the <div id="svelte"> element in src/app.html
		vite: {
			resolve: {
				alias: {
					$utils: path.resolve('src/utils'),
					$actions: path.resolve('src/actions'),
					$stores: path.resolve('src/stores'),
					$atoms: path.resolve('src/lib/atoms'),
					$molecules: path.resolve('src/lib/molecules'),
					$organisms: path.resolve('src/lib/organisms'),
					$templates: path.resolve('src/lib/templates'),
					$pages: path.resolve('src/lib/pages')
				}
			}
		},
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
