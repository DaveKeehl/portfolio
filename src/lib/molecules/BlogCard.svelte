<script lang="ts">
	import type { IArticle } from '$utils/lib';

	export let article: IArticle;
	const { title, category, cover, excerpt } = article;
</script>

<div>
	<img src={cover.url} alt={''} />
	<h5>{category}</h5>
	<h3>{title}</h3>
	<p>{excerpt}</p>
</div>

<style>
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

	h3 {
		margin: 0.5rem 0;
	}
</style>
