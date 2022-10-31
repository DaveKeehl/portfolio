<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade } from 'svelte/transition';
	import { reveal } from 'svelte-reveal';

	import Button from '$lib/components/Button.svelte';
	import Pill from '$lib/components/Pill.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import Section from '$lib/utils/Section.svelte';

	import type { IBlog, IPostPreview } from '$utils/lib';
	import { deCamelCase } from '$utils/functions';
	import { css } from '$utils/stitches.config';
	import { section } from '$utils/stores';

	export let blog: IBlog;
	const { heading, labels, posts } = blog;

	const CHUNK = 2;
	let cursor = CHUNK;

	let selectedLabels: Set<string> = new Set();

	$: hasPostMatchingLabel = (post: IPostPreview) => {
		if (selectedLabels.size === 0) return true; // If there are no filters, returns all posts
		return selectedLabels.has(deCamelCase(post._type)); // else, a post is visible if the corresponding label is selected
	};

	$: filteredPosts = posts.filter((post) => hasPostMatchingLabel(post));
	$: visiblePosts = filteredPosts.slice(0, cursor);

	const showMorePosts = () => (cursor += CHUNK);

	const toggleLabel = (label: string) => {
		const hasLabelSelected = selectedLabels.has(label);
		const toggleAction = hasLabelSelected ? 'delete' : 'add';
		selectedLabels[toggleAction](label);
		selectedLabels = selectedLabels;
	};

	const cleanLabels = labels.map((label) => deCamelCase(label));

	const sectionStyles = css({
		scrollPaddingTop: '2rem'
	});

	const postsStyles = css({
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
		columnGap: '20px',
		rowGap: '56px'
	});

	const categoriesStyles = css({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '12px',
		marginBottom: '4rem'
	});

	const buttonWrapperStyles = css({
		display: 'grid',
		placeItems: 'center',
		marginTop: '5rem'
	});

	let element: HTMLElement;
</script>

<IntersectionObserver
	{element}
	on:intersect={() => section.set('blog')}
	threshold={0.2}
>
	<div bind:this={element}>
		<Section
			id="blog"
			{heading}
			headingGap="small"
			icon="Quotes"
			class={sectionStyles()}
		>
			<div class={categoriesStyles()} use:reveal={{ delay: 300 }}>
				{#each cleanLabels as label}
					<Pill
						selected={selectedLabels.has(label)}
						text={label}
						on:click={() => toggleLabel(label)}
					/>
				{/each}
			</div>

			<div class={postsStyles()}>
				{#each visiblePosts as card, idx}
					<!-- <BlogCard {...card} {idx} {CHUNK} /> -->
					<BlogCard {...card} />
				{/each}
			</div>

			{#if cursor < filteredPosts.length}
				<div
					class={buttonWrapperStyles()}
					transition:fade={{ duration: 100 }}
					use:reveal={{ marginBottom: 20 }}
				>
					<Button on:click={showMorePosts}>Load more posts</Button>
				</div>
			{/if}
		</Section>
	</div>
</IntersectionObserver>
