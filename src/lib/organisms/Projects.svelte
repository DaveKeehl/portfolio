<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import type { IProjects } from '$utils/lib';

	import Container from '$templates/Container.svelte';
	import SectionNumber from '$atoms/SectionNumber.svelte';
	import ProjectCard from '$molecules/ProjectCard.svelte';

	export let projects: IProjects;
	const { heading, projects: cards } = projects;
</script>

<section class="section" id="projects">
	<Container class="section__layout">
		<SectionNumber number={2} />
		<div class="wrapper">
			<h2 class="margin-bottom-large" use:reveal={{ delay: 200 }}>{heading}</h2>
			<div class="projects">
				{#each cards as project, i}
					<ProjectCard {project} reversed={i % 2 === 0} />
				{/each}
			</div>
		</div>
	</Container>
</section>

<style>
	section {
		padding-top: 2rem;
	}

	.projects {
		display: grid;
		gap: 3.5rem;
	}
</style>
