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
		display: flex;
		flex-direction: column;
		width: 100%;

		@media (min-width: $sizes-md) {
			width: 70%;
		}

		& > :global(p) {
			margin-bottom: 1rem;
		}

		& > :global(h2) {
			margin-bottom: 2rem;
		}

		& > :global(h2:not(:first-child)) {
			margin-top: 5rem;
		}

		& > :global(img) {
			width: 100%;
			height: auto;
			object-fit: contain;
			margin-top: 5rem;
			align-self: center;

			@media (min-width: $sizes-md) {
				width: initial;
			}
		}

		& > :global(.caption) {
			text-align: center;
			margin-top: 1rem;
		}
	}
</style>
