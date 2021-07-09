<script lang="ts">
	import { dev } from '$app/env';
	import { getPrefix } from '$utils/functions';
	import type { IArticle } from '$utils/lib';

	export let article: IArticle;
	const { title, slug, category, cover, excerpt } = article;

	const cleanCategory = (category: string): string => {
		return category.replace(/[_-]/g, ' ');
	};

	const prefix: string = getPrefix(dev);
</script>

<div>
	<a href={`${prefix}/blog/${slug}`} class="cover">
		<img src={cover.url} alt={cover.alt} />
	</a>
	<h5 class="h5--SEMIBOLD">{cleanCategory(category)}</h5>
	<a href={`${prefix}/blog/${slug}`}>
		<h3>{title}</h3>
	</a>
	<p class="p5--regular">{excerpt}</p>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';

	div {
		display: flex;
		flex-direction: column;
	}

	.cover {
		display: flex;
		overflow: hidden;
		margin-bottom: 1.5rem;

		&:hover img {
			transform: scale(1.1);
		}

		img {
			width: 100%;
			aspect-ratio: 16 / 9;
			object-fit: cover;
			transform: scale(1);
			will-change: transform;
			transition: transform 0.2s;
		}
	}

	a {
		color: $white;
	}

	h5 {
		color: $blue-100;
	}

	h3 {
		margin: 0.5rem 0;
	}
</style>
