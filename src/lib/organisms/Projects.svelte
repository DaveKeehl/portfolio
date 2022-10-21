<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import type { IProjects } from '$utils/lib';

	import ProjectCard from '$molecules/ProjectCard.svelte';
	import Section from '$templates/Section.svelte';

	export let projects: IProjects;
	const { heading, projects: cards } = projects;
</script>

<Section id="projects" {heading} headingGap="large" icon="Fire">
	<div class="projects">
		{#each cards as project, i}
			<ProjectCard {project} reversed={i % 2 === 0} />
		{/each}
	</div>
</Section>

<style>
	.projects {
		display: grid;
		gap: 3.5rem;
	}
</style>
