<script lang="ts">
  import type { ISection } from '$utils/lib';
  import { section } from '$utils/stores';

  let className = '';
  export { className as class };
  export let sections: ISection[];

  $: currentSection = $section;

  const onClick = (e: any, sectionName: string) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.querySelector(`#${sectionName}`)?.scrollIntoView({
        behavior: 'smooth'
      });
      window.history.pushState({ section: sectionName }, '', `#${sectionName}`);
    }
  };
</script>

<nav class={`no-scrollbar flex gap-6 ${className}`}>
  {#each sections as section}
    <a
      href={`/#${section.name.toLowerCase()}`}
      class="flex text-p5 font-semibold uppercase leading-6 tracking-[2%] text-blue-200 transition-colors hover:text-grayscale-100"
      class:text-grayscale-100={currentSection === section.name.toLowerCase()}
      on:click={(e) => onClick(e, section.name.toLowerCase())}
    >
      {section.name}
    </a>
  {/each}
</nav>
