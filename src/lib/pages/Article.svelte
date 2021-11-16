<script lang="ts">
	import ArticleTop from '$molecules/ArticleTop.svelte';
	import Container from '$templates/Container.svelte';
	import { reveal } from 'svelte-reveal';
	import SEO from '$templates/SEO.svelte';
	import type { IArticle } from '$utils/lib';

	export let article: IArticle;
	const { title, category, cover, excerpt, content } = article;
</script>

<SEO title={`${title} | Davide Ciulla`} description={excerpt} image={cover.url} />

<Container>
	<article>
		<ArticleTop {title} {category} {cover} />
		<section use:reveal={{ debug: true, ref: 'content' }}>
			{@html content.html}
		</section>
	</article>
</Container>

<style lang="scss">
	@import '../../styles/colors.scss';
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

		@media (min-width: $tablet-l) {
			width: 70%;
		}

		& > :global(p) {
			margin-bottom: 1rem;
		}

		& > :global(h1) {
			border-bottom: 1px solid $turquoise-100-a20;
			padding-bottom: 1rem;
		}

		& > :global(h1),
		:global(h2),
		:global(h3),
		:global(h4),
		:global(h5),
		:global(h6) {
			margin-bottom: 2rem;
		}

		& > :global(h1:not(:first-child)),
		:global(h2:not(:first-child)),
		:global(h3:not(:first-child)),
		:global(h4:not(:first-child)),
		:global(h5:not(:first-child)),
		:global(h6:not(:first-child)) {
			margin-top: 5rem;
		}

		& > :global(img) {
			width: 100%;
			height: auto;
			object-fit: contain;
			margin-top: 5rem;
			align-self: center;

			@media (min-width: $tablet-l) {
				width: initial;
			}
		}

		& > :global(img ~ .caption) {
			text-align: center;
			margin-top: 1rem;
		}
	}
</style>
