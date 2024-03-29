import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import {
  getArticleBySlug,
  getFooter,
  getHeader,
  getSiteSettings
} from '$utils/queries';
import { client } from '$utils/sanity';
import type {
  IArticle,
  IFooter,
  IHeader,
  IPostPreview,
  ISiteSettings
} from '$utils/lib';

export const load: PageLoad = async ({ params }) => {
  const siteSettings: ISiteSettings = await client.fetch(getSiteSettings);
  const header: IHeader = await client.fetch(getHeader);
  const footer: IFooter = await client.fetch(getFooter);
  const articleBySlug: { article: IArticle; relatedPosts: IPostPreview[] } =
    await client.fetch(getArticleBySlug, {
      slug: params.slug
    });

  const { article, relatedPosts } = articleBySlug;

  if (!article) throw error(400, 'Could not find');

  if (siteSettings && header && footer) {
    const data = {
      siteSettings,
      header,
      article,
      relatedPosts,
      footer
    };

    return data;
  }

  throw error(500, 'Could not load');
};
