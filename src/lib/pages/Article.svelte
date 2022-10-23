<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import ArticleTop from '$lib/components/ArticleTop.svelte';
	import Container from '$lib/utils/Container.svelte';
	import SEO from '$lib/utils/SEO.svelte';

	import type { IArticle } from '$utils/lib';

	export let article: IArticle;
	const { title, category, cover, excerpt, content } = article;
</script>

<SEO
	title={`${title} | Davide Ciulla`}
	description={excerpt}
	image={cover.url}
/>

<Container>
	<article>
		<ArticleTop {title} {category} {cover} />
		<section use:reveal={{ debug: true, ref: 'content' }}>
			{@html content.html}
		</section>
	</article>
</Container>
