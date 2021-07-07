<script lang="ts">
	import type { IArticle } from '$utils/lib';

	export let article: IArticle;
	const { title, category, cover, excerpt } = article;

	const cleanCategory = (category: string): string => {
		return category.replace(/[_-]/g, ' ');
	};
</script>

<div>
	<img src={cover.url} alt={''} />
	<h5>{cleanCategory(category)}</h5>
	<h3>{title}</h3>
	<p class="p5--regular">{excerpt}</p>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';

	div {
		display: flex;
		flex-direction: column;
	}

	img {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		margin-bottom: 1.5rem;
	}

	h5 {
		color: $blue-100;
	}

	h3 {
		margin: 0.5rem 0;
	}
</style>
