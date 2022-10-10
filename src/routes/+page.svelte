<script lang="ts">
	import { afterUpdate } from 'svelte';
	import Home from '$lib/pages/Home.svelte';
	import Layout from '$lib/templates/Layout.svelte';
	import type { IHeader, IHomepage, IFooter, IProject, IArticle } from '$utils/lib';
	import type { PageData } from './$types';

	export let data: PageData;
	let { homepage, projects, articles, header, footer } = data;
	$: ({ homepage, projects, articles, header, footer } = data);

	// export let homepage: IHomepage;
	// export let projects: IProject[];
	// export let articles: IArticle[];
	// export let header: IHeader;
	// export let footer: IFooter;

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
