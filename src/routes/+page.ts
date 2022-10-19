import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { url, getHomepage } from '$utils/queries';
import { client } from '$utils/sanity';

export const load: PageLoad = async () => {
	const data = await client.fetch(getHomepage);

	if (data) {
		const { homepage, siteSettings } = data;

		return {
			homepage,
			siteSettings
		};
	}

	throw error(500, `Could not load ${url}`);
};
