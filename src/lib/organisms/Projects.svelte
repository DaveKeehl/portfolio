<script lang="ts">
	import { reveal } from '$actions/reveal';
	import type { IProject } from '$utils/lib';
	import SectionNumber from '$atoms/SectionNumber.svelte';
	import ProjectCard from '$molecules/ProjectCard.svelte';
	import Container from '$templates/Container.svelte';

	export let title: string;
	export let projects: IProject[];

	const featuredProjects = projects.filter((project) => project.featured);
</script>

<section class="section" id="projects">
	<Container class="section__layout">
		<SectionNumber number={2} />
		<div class="wrapper">
			<h2 class="margin-bottom-large" use:reveal={{ delay: 200 }}>{title}</h2>
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
