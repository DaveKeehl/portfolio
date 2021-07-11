<script lang="ts">
	import ArticleTop from '$lib/molecules/ArticleTop.svelte';
	import Container from '$lib/templates/Container.svelte';
	import SEO from '$lib/templates/SEO.svelte';

	import type { IArticle } from '$utils/lib';

	export let article: IArticle;
	const { title, category, cover, excerpt, content } = article;
</script>

<SEO title={`${title} | Davide Ciulla`} description={excerpt} />

<Container>
	<article>
		<ArticleTop {title} {category} {cover} />

		<section>
			{@html content.html}
		</section>
	</article>
</Container>

<style lang="scss">
	@import '../../styles/breakpoints.scss';

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		width: 100%;

		@media (min-width: $sizes-md) {
			width: 70%;
		}
	}
</style>
