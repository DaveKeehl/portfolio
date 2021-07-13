<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '$lib/atoms/Button.svelte';
	import BlogCard from '$lib/molecules/BlogCard.svelte';
	import Section from '$lib/templates/Section.svelte';
	import { revealOnScroll } from '$actions/revealOnScroll';
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
	<div use:revealOnScroll={{ delay: 200 }}>
		<h2 class="margin-bottom-small">{title}</h2>

		<div class="categories">
			{#each categories as category}
				<p
					class:selected={selectedCategories.has(category)}
					class="p5--semibold"
					on:click={() => toggleCategory(category)}
				>
					{category}
				</p>
			{/each}
		</div>

		<div class="articles">
			{#each visibleCards as card}
				<BlogCard {...card} />
			{/each}
		</div>
		{#if cursor <= cards.length && remainingCards.some((card) => {
				if (selectedCategories.size === 0) {
					return true;
				}
				return selectedCategories.has(card.category);
			})}
			<div class="button-wrapper" transition:fade={{ duration: 100 }}>
				<Button on:click={showMoreCards}>Load more posts</Button>
			</div>
		{/if}
	</div>
</Section>

<style lang="scss">
	@import '../../styles/colors.scss';

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

		p {
			background: $turquoise-100-a10;
			color: $turquoise-200;
			padding: 8px 20px;
			border-radius: 24px;
			transition: color 0.2s, box-shadow 0.1s;

			&::selection {
				background: none;
			}

			&:hover {
				cursor: pointer;
				color: $turquoise-100;
			}

			&.selected {
				color: $turquoise-200;
				box-shadow: 0 0 0 2px $turquoise-200;
			}
		}
	}

	.button-wrapper {
		display: grid;
		place-items: center;
		margin-top: 5rem;
	}
</style>
