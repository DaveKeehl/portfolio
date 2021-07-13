<script lang="ts">
	import { dev } from '$app/env';
	import { getPrefix } from '$utils/functions';
	import type { IImage } from '$utils/lib';

	export let title: string;
	export let slug: string;
	export let resourceType: string;
	export let excerpt: string;
	export let cover: IImage;
	export let category: string;
	export let createdAt: string;

	const cleanCategory = (category: string): string => {
		return category.replace(/[_-]/g, ' ');
	};

	const prefix: string = getPrefix(dev);
</script>

<div>
	<a href={`${prefix}/${resourceType}/${slug}`} class="cover">
		<img src={cover.url} alt={cover.alt} />
	</a>
	<h5 class="h5--SEMIBOLD">#{cleanCategory(category)}</h5>
	<a href={`${prefix}/${resourceType}/${slug}`}>
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
		color: $blue-200;
	}

	h3 {
		margin: 0.5rem 0;
	}
</style>
