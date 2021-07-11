<script lang="ts">
	import SectionNumber from '$lib/atoms/SectionNumber.svelte';
	import ProjectCard from '$lib/molecules/ProjectCard.svelte';
	import Container from '$lib/templates/Container.svelte';
	import type { IProject } from '$utils/lib';

	export let title: string;
	export let projects: IProject[];

	const featuredProjects = projects.filter((project) => project.featured);
</script>

<section class="section" id="projects">
	<Container class="section__layout">
		<SectionNumber number={2} />
		<div>
			<h2 class="margin-bottom-large">{title}</h2>
			<div class="projects">
				{#each featuredProjects as project, i}
					<ProjectCard {project} reversed={i % 2 !== 0} />
				{/each}
			</div>
		</div>
	</Container>
</section>

<style>
	.projects {
		display: grid;
		gap: 3.5rem;
	}
</style>
