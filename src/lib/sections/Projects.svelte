<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import Section from '$lib/utils/Section.svelte';

  import type { IProjects } from '$utils/lib';
  import { section } from '$utils/stores';

  export let projects: IProjects;
  const { heading, projects: cards } = projects;

  let element: HTMLElement;
</script>

<IntersectionObserver {element} on:intersect={() => section.set('projects')}>
  <div bind:this={element}>
    <Section
      id="projects"
      {heading}
      headingGap="large"
      icon="Fire"
      class="scroll-pt-8"
    >
      <div class="grid gap-14">
        {#each cards as project, idx}
          <ProjectCard {project} reversed={idx % 2 !== 0} />
        {/each}
      </div>
    </Section>
  </div>
</IntersectionObserver>
