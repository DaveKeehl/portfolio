import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import {
	getFooter,
	getHeader,
	getProjectBySlug,
	getSiteSettings
} from '$utils/queries';
import { client } from '$utils/sanity';
import type {
	IFooter,
	IHeader,
	IPostPreview,
	IProject,
	ISiteSettings
} from '$utils/lib';

export const load: PageLoad = async ({ params }) => {
	const siteSettings: ISiteSettings = await client.fetch(getSiteSettings);
	const header: IHeader = await client.fetch(getHeader);
	const footer: IFooter = await client.fetch(getFooter);
	const projectBySlug: { project: IProject; relatedPosts: IPostPreview[] } =
		await client.fetch(getProjectBySlug, {
			slug: params.slug
		});

	const { project, relatedPosts } = projectBySlug;

	if (!project) throw error(400, 'Could not find');

	if (siteSettings && header && footer) {
		const data = {
			siteSettings,
			header,
			project,
			relatedPosts,
			footer
		};

		return data;
	}

	throw error(500, 'Could not load');
};
