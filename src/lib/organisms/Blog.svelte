<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '$atoms/Button.svelte';
	import Label from '$atoms/Label.svelte';
	import BlogCard from '$molecules/BlogCard.svelte';
	import Section from '$templates/Section.svelte';
	import { reveal } from 'svelte-reveal';
	import type { IBlog, IPost } from '$utils/lib';

	export let blog: IBlog;
	const { heading, labels, posts } = blog;

	const CHUNK = 6;
	let cursor = CHUNK;

	let selectedCategories: Set<string> = new Set();

	$: isPostVisible = (post: IPost) => {
		if (selectedCategories.size === 0) return true; // If there are no filters, returns all posts
		return selectedCategories.has(post._type); // else, a post is visible if the corresponding label is selected
	};

	$: visiblePosts = posts
		.filter((post) => isPostVisible(post))
		.slice(0, cursor);

	const showMorePosts = () => (cursor += CHUNK);

	const toggleCategory = (category: string) => {
		selectedCategories[selectedCategories.has(category) ? 'delete' : 'add'](
			category
		);
		selectedCategories = selectedCategories;
	};
</script>

<Section number={3} id="blog">
	<div>
		<h2 class="margin-bottom-small" use:reveal={{ delay: 200 }}>{heading}</h2>

		<div class="categories" use:reveal={{ delay: 300 }}>
			{#each labels as label}
				<Label
					selected={selectedCategories.has(label)}
					{label}
					{toggleCategory}
				/>
			{/each}
		</div>

		<div class="posts">
			{#each visiblePosts as card, idx}
				<BlogCard {...card} {idx} {CHUNK} />
			{/each}
		</div>

		{#if cursor <= posts.length && visiblePosts
				.slice(cursor)
				.some((post) => isPostVisible(post))}
			<div
				class="button-wrapper"
				transition:fade={{ duration: 100 }}
				use:reveal={{ marginBottom: 20 }}
			>
				<Button on:click={showMorePosts}>Load more posts</Button>
			</div>
		{/if}
	</div>
</Section>

<style lang="scss">
	@import '../../styles/colors.scss';

	:global(section#blog) {
		padding-top: 2rem;
	}

	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		column-gap: 1.25rem;
		row-gap: 3.5rem;
	}

	.categories {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 4rem;
	}

	.button-wrapper {
		display: grid;
		place-items: center;
		margin-top: 5rem;
	}
</style>
