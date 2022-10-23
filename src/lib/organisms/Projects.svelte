<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import ProjectCard from '$molecules/ProjectCard.svelte';
	import Section from '$templates/Section.svelte';

	import type { IProjects } from '$utils/lib';
	import { section } from '$utils/stores';
	import { css } from '$utils/stitches.config';

	export let projects: IProjects;
	const { heading, projects: cards } = projects;

	let element: HTMLElement;

	const sectionStyles = css({
		scrollPadding: '50px'
	});

	const projectsStyles = css({
		display: 'grid',
		gap: '3.5rem',
		scrollPadding: '50px'
	});
</script>

<IntersectionObserver {element} on:intersect={() => section.set('projects')}>
	<div bind:this={element}>
		<Section
			id="projects"
			{heading}
			headingGap="large"
			icon="Fire"
			class={sectionStyles()}
		>
			<div class={projectsStyles()}>
				{#each cards as project, i}
					<ProjectCard {project} reversed={i % 2 !== 0} />
				{/each}
			</div>
		</Section>
	</div>
</IntersectionObserver>
