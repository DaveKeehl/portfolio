<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Container from '$lib/utils/Container.svelte';
  import Socials from '$lib/components/Socials.svelte';
  import SanityImage from '$components/SanityImage.svelte';

  import type { IHeader } from '$utils/lib';

  export let header: IHeader;
  const { logo, sections, socials } = header;

  let isVisible = true;
  let y = 0;
  let lastY = 0;

  function checkVisibility(y: number): boolean {
    const TOLERANCE = 0;
    const dy = lastY - y;
    lastY = y;

    if (Math.abs(dy) <= TOLERANCE) return isVisible; // if delta-y doesn't go over the tolerance, persist the existing visibility state
    return dy > TOLERANCE;
  }

  $: isVisible = checkVisibility(y);
</script>

<svelte:window bind:scrollY={y} />

<header
  class:headerHidden={!isVisible}
  class="sticky top-0 left-0 w-full z-10 opacity-100 backdrop-blur-[10px] translate-y-0 transition-all duration-300 pointer-events-auto before:content-[''] before:absolute before:bottom-0 before:w-full before:h-px before:bg-header after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-blue-400 after:-z-[1] after:pointer-events-none after:opacity-75"
>
  <Container>
    <div
      class="flex justify-between items-center py-[18px] text-grayscale-100 w-full"
    >
      <div class="flex flex-none justify-start lg:flex-1">
        <a href="/" class="flex h-8">
          <SanityImage src={logo.assetId} alt="Logo" />
        </a>
      </div>
      <div class="hidden lg:flex">
        <Navbar {sections} />
      </div>
      <div class="flex flex-none justify-end lg:flex-1">
        <Socials {socials} />
      </div>
    </div>
  </Container>
  <div
    class="w-full flex justify-center relative overflow-hidden lg:hidden before:content-[''] before:absolute before:top-0 before:w-full before:h-px before:bg-header"
  >
    <Navbar
      {sections}
      class="w-10/12 py-[14px] overflow-scroll sm:justify-center"
    />
  </div>
</header>

<style>
  .headerHidden {
    opacity: 0;
    transform: translateY(-20px);
    pointer-events: none;
  }
</style>
