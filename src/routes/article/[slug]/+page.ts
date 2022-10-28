import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getArticleBySlug } from '$utils/queries';
import { client } from '$utils/sanity';

export const load: PageLoad = async () => {
	const data = await client.fetch(getArticleBySlug, {
		slug: 'welcome-to-my-portfolio'
	});

	if (data) {
		const { _createdAt, title, content, image } = data;

		return {
			_createdAt,
			title,
			image,
			content
		};
	}

	throw error(500, 'Could not load');
};
