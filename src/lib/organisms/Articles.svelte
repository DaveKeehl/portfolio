<script lang="ts">
	import BlogCard from '$lib/molecules/BlogCard.svelte';
	import Section from '$lib/templates/Section.svelte';
	import type { IArticle } from '$utils/lib';

	export let title: string;
	export let articles: IArticle[];
</script>

<Section number={3} id="blog">
	<div>
		<h2 class="margin-bottom-large">{title}</h2>
		<div class="articles">
			{#each articles as article}
				<BlogCard {article} />
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
