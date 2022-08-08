<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { url, getArticleBySlug } from '$utils/queries';

	export const load: Load = async ({ params, fetch }) => {
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
				props: {
					article,
					header,
					footer
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	};
</script>

<script lang="ts">
	import Layout from '$lib/templates/Layout.svelte';
	import Article from '$lib/pages/Article.svelte';
	import type { IArticle, IFooter, IHeader } from '$utils/lib';

	export let article: IArticle;
	export let header: IHeader;
	export let footer: IFooter;
</script>

<Layout {header} {footer} article={true}>
	<Article {article} />
</Layout>
