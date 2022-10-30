import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import {
	getFooter,
	getHeader,
	getHomepage,
	getSiteSettings
} from '$utils/queries';
import { client } from '$utils/sanity';

export const load: PageLoad = async () => {
	const siteSettings = await client.fetch(getSiteSettings);
	const header = await client.fetch(getHeader);
	const footer = await client.fetch(getFooter);
	const homepage = await client.fetch(getHomepage);

	if (siteSettings && header && footer && homepage) {
		return {
			siteSettings,
			header,
			footer,
			homepage
		};
	}

	throw error(500, 'Could not load');
};
