<script lang="ts">
	import BlogCard from '$lib/molecules/BlogCard.svelte';
	import Section from '$lib/templates/Section.svelte';
	import type { IArticle, IImage, IProject } from '$utils/lib';

	export let title: string;
	export let articles: IArticle[];
	export let projects: IProject[];

	/**
	 *
	 * @param d1: string
	 * @param d2: string
	 *
	 * @returns number
	 */
	const compareDates = (e1: ICard, e2: ICard): number => {
		const d1 = new Date(e1.createdAt);
		const d2 = new Date(e2.createdAt);

		return d1 < d2 ? 1 : 0;
	};

	interface ICard {
		createdAt: string;
		title: string;
		slug: string;
		excerpt: string;
		cover: IImage;
		resourceType: 'project' | 'blog';
		category: string;
	}

	const getCardsList = (articles: IArticle[], projects: IProject[]): ICard[] => {
		let list: ICard[] = [];

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

	const cards: ICard[] = getCardsList(articles, projects);
</script>

<Section number={3} id="blog">
	<div>
		<h2 class="margin-bottom-large">{title}</h2>
		<div class="articles">
			{#each cards as card}
				<BlogCard
					title={card.title}
					slug={card.slug}
					excerpt={card.excerpt}
					cover={card.cover}
					resourceType={card.resourceType}
					category={card.category}
				/>
			{/each}
		</div>
	</div>
</Section>

<style>
	.articles {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		column-gap: 1.25rem;
		row-gap: 3.5rem;
	}
</style>
