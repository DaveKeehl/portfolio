<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { url, getHomepage } from '$utils/queries';

	export const load: Load = async ({ fetch }) => {
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
				props: {
					homepage,
					projects,
					articles,
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
	import { afterUpdate } from 'svelte';
	import Home from '$lib/pages/Home.svelte';
	import Layout from '$lib/templates/Layout.svelte';
	import type { IHeader, IHomepage, IFooter, IProject, IArticle } from '$utils/lib';

	export let homepage: IHomepage;
	export let projects: IProject[];
	export let articles: IArticle[];
	export let header: IHeader;
	export let footer: IFooter;

	let show = false;

	afterUpdate(() => {
		show = true;
	});
</script>

{#if show}
	<Layout {header} {footer} homepage={true}>
		<Home {homepage} {projects} {articles} />
	</Layout>
{/if}
