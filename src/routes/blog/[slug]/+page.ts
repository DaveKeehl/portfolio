import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { url, getArticleBySlug } from '$utils/queries';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: getArticleBySlug,
			variables: {
				slug: params.slug
			}
		})
	});

	if (res.ok) {
		const { article, header, footer } = (await res.clone().json()).data;
		return {
			article,
			header,
			footer
		};
	}

	throw error(500, `Could not load ${url}`);
};
