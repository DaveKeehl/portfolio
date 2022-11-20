<script lang="ts">
	import BlogCard from '$components/BlogCard.svelte';

	import type { IPostPreview } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let posts: IPostPreview[];
	export let maxWidth: number;

	const relatedContainerStyles = css({
		width: '80%',
		maxWidth: `${maxWidth}px`,
		margin: '0 auto',
		marginBottom: '160px'
	});

	const relatedTitleStyles = css({
		h2: 'bold',
		marginBottom: '40px'
	});

	const relatedPostsStyles = css({
		display: 'flex',
		flexDirection: 'row',
		gap: '16px'
	});
</script>

<div class={relatedContainerStyles()}>
	<h2 class={relatedTitleStyles()}>Other posts.</h2>
	<div class={relatedPostsStyles()}>
		{#each posts as card}
			<BlogCard {...card} />
		{/each}
	</div>
</div>
