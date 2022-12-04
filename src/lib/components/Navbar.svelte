<script lang="ts">
  import { goto } from '$app/navigation';
  import type { ISection } from '$utils/lib';
  import { section } from '$utils/stores';

  let className = '';
  export { className as class };
  export let sections: ISection[];

  $: currentSection = $section;

  const onClick = (e: any, sectionName: string) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const target = document.querySelector(`#${sectionName}`);
      target?.scrollIntoView({
        behavior: 'smooth'
      });
      window.history.pushState({ section: sectionName }, '', `#${sectionName}`);
    }
  };
</script>

<nav class={`flex gap-6 ${className}`}>
  {#each sections as section}
    <a
      href={`/#${section.name.toLowerCase()}`}
      class="flex text-blue-200 text-p5 font-semibold leading-6 tracking-[2%] uppercase transition-colors hover:text-grayscale-100"
      class:text-grayscale-100={currentSection === section.name.toLowerCase()}
      on:click={(e) => onClick(e, section.name.toLowerCase())}
    >
      {section.name}
    </a>
  {/each}
</nav>
