<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '$atoms/Button.svelte';
	import Label from '$atoms/Label.svelte';
	import BlogCard from '$molecules/BlogCard.svelte';
	import Section from '$templates/Section.svelte';
	import { reveal } from 'svelte-reveal';
	import type { IArticle, IArticleCard, IProject } from '$utils/lib';

	export let title: string;
	export let articles: IArticle[];
	export let projects: IProject[];

	const compareDates = (e1: IArticleCard, e2: IArticleCard): number => {
		const d1 = new Date(e1.createdAt);
		const d2 = new Date(e2.createdAt);
		return d1 < d2 ? 1 : 0;
	};

	const getCardsList = (articles: IArticle[], projects: IProject[]): IArticleCard[] => {
		let list: IArticleCard[] = [];

		articles.forEach((article) => {
			list.push({
				createdAt: article.createdAt,
				title: article.title,
				slug: article.slug,
				excerpt: article.excerpt,
				cover: article.cover,
				resourceType: 'blog',
				category: article.category
			});
		});
		projects.forEach((project) => {
			list.push({
				createdAt: project.createdAt,
				title: project.title,
				slug: project.slug,
				excerpt: project.excerpt,
				cover: project.cover,
				resourceType: 'project',
				category: 'Case Study'
			});
		});

		list.sort(compareDates);
		return list;
	};

	const CHUNK: number = 2;
	let cursor: number = CHUNK;

	const cards: IArticleCard[] = getCardsList(articles, projects);
	$: categories = [...new Set(cards.map((card) => card.category))];
	let selectedCategories: Set<string> = new Set();

	$: visibleCards = cards
		.filter((card) => {
			if (selectedCategories.size === 0) {
				return true;
			}
			return selectedCategories.has(card.category);
		})
		.slice(0, cursor);

	$: remainingCards = cards
		.filter((card) => {
			if (selectedCategories.size === 0) {
				return true;
			}
			return selectedCategories.has(card.category);
		})
		.slice(cursor);

	const showMoreCards = () => (cursor += CHUNK);

	const toggleCategory = (category: string) => {
		if (selectedCategories.has(category)) {
			selectedCategories.delete(category);
		} else {
			selectedCategories.add(category);
		}
		selectedCategories = selectedCategories;
	};
</script>

<Section number={3} id="blog">
	<div>
		<h2 class="margin-bottom-small" use:reveal={{ delay: 200 }}>{title}</h2>

		<div class="categories" use:reveal={{ delay: 300 }}>
			{#each categories as category}
				<Label selected={selectedCategories.has(category)} {category} {toggleCategory} />
			{/each}
		</div>

		<div class="articles">
			{#each visibleCards as card, idx}
				<BlogCard {...card} {idx} {CHUNK} />
			{/each}
		</div>
		{#if cursor <= cards.length && remainingCards.some((card) => {
				if (selectedCategories.size === 0) {
					return true;
				}
				return selectedCategories.has(card.category);
			})}
			<div
				class="button-wrapper"
				transition:fade={{ duration: 100 }}
				use:reveal={{ marginBottom: 20 }}
			>
				<Button on:click={showMoreCards}>Load more posts</Button>
			</div>
		{/if}
	</div>
</Section>

<style lang="scss">
	@import '../../styles/colors.scss';

	:global(section#blog) {
		padding-top: 2rem;
	}

	.articles {
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
