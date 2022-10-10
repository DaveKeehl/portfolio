import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { url, getHomepage } from '$utils/queries';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: getHomepage
		})
	});

	if (res.ok) {
		const { homepage, projects, articles, header, footer } = (await res.json()).data;
		return {
			homepage,
			projects,
			articles,
			header,
			footer
		};
	}

	throw error(500, `Could not load ${url}`);
};
