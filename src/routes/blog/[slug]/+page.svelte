<script lang="ts">
	import Layout from '$lib/utils/Layout.svelte';
	import Article from '$lib/pages/Article.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { article, header, footer } = data;
	$: ({ article, header, footer } = data);
</script>

<Layout {header} {footer}>
	<Article {article} />
</Layout>
