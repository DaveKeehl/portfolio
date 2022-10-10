import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { url, getProjectBySlug } from '$utils/queries';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: getProjectBySlug,
			variables: {
				slug: params.slug
			}
		})
	});

	if (res.ok) {
		const { project, header, footer } = (await res.clone().json()).data;
		return {
			project,
			header,
			footer
		};
	}

	throw error(500, `Could not load ${url}`);
};
