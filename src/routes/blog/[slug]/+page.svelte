<script lang="ts">
	import Layout from '$lib/templates/Layout.svelte';
	import Article from '$lib/pages/Article.svelte';
	import type { PageData } from './$types';
	import type { IArticle, IFooter, IHeader } from '$utils/lib';

	export let data: PageData;
	let { article, header, footer } = data;
	$: ({ article, header, footer } = data);

	// export let article: IArticle;
	// export let header: IHeader;
	// export let footer: IFooter;
</script>

<Layout {header} {footer} article={true}>
	<Article {article} />
</Layout>
