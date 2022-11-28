<script lang="ts">
  import type { ISection } from '$utils/lib';
  import { section } from '$utils/stores';

  let className = '';
  export { className as class };
  export let sections: ISection[];

  $: currentSection = $section;
</script>

<nav class={`flex gap-6 ${className}`}>
  {#each sections as section}
    <a
      href={`/#${section.name.toLowerCase()}`}
      class="flex text-blue-200 text-p5 font-semibold leading-6 tracking-[2%] uppercase transition-colors hover:text-grayscale-100"
      class:text-grayscale-100={currentSection === section.name.toLowerCase()}
      >{section.name}</a
    >
  {/each}
</nav>
