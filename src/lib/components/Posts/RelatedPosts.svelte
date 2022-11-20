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
		marginBottom: '56px'
	});

	const relatedPostsStyles = css({
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
		columnGap: '20px',
		rowGap: '56px'
	});
</script>

<div class={relatedContainerStyles()}>
	<h2 class={relatedTitleStyles()}>Related posts.</h2>
	<div class={relatedPostsStyles()}>
		{#each posts as card}
			<BlogCard {...card} />
		{/each}
	</div>
</div>
