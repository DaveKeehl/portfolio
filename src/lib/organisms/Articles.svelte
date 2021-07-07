<script lang="ts">
	import SectionNumber from '$lib/atoms/SectionNumber.svelte';
	import BlogCard from '$lib/molecules/BlogCard.svelte';
	import Container from '$lib/templates/Container.svelte';
	import type { IArticle } from '$utils/lib';

	export let title: string;
	export let articles: IArticle[];
</script>

<section class="section" id="blog">
	<Container class="section__layout">
		<SectionNumber number={3} />
		<div>
			<h2 class="margin-bottom-large">{title}</h2>
			<div class="articles">
				{#each articles as article}
					<BlogCard {article} />
				{/each}
			</div>
		</div>
	</Container>
</section>

<style>
	.articles {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		column-gap: 1.25rem;
		row-gap: 3.5rem;
	}
</style>
