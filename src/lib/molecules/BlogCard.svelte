<script lang="ts">
	import type { IArticle } from '$utils/lib';

	export let article: IArticle;
	const { title, slug, category, cover, excerpt } = article;

	const cleanCategory = (category: string): string => {
		return category.replace(/[_-]/g, ' ');
	};
</script>

<div>
	<a href={`https://davideciulla.com/blog/${slug}`} class="cover">
		<img src={cover.url} alt={''} />
	</a>
	<h5>{cleanCategory(category)}</h5>
	<a href={`https://davideciulla.com/blog/${slug}`}>
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
