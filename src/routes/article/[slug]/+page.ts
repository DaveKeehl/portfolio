import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getArticleBySlug, getFooter, getHeader } from '$utils/queries';
import { client } from '$utils/sanity';

export const load: PageLoad = async ({ params }) => {
	const header = await client.fetch(getHeader);
	const footer = await client.fetch(getFooter);
	const articleBySlug = await client.fetch(getArticleBySlug, {
		slug: params.slug
	});

	if (header && footer && articleBySlug) {
		const { article } = articleBySlug;

		return {
			header,
			article,
			footer
		};
	}

	throw error(500, 'Could not load');
};
