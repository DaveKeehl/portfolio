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

  /**
   * Determine whether the header should be visible based on the window y-value.
   * @param y - The window y-value.
   * @return Whether the header is visible.
   */
  function checkVisibility(y: number): boolean {
    const TOLERANCE = 0;
    const dy = lastY - y; // basically the scroll amount
    lastY = y;

    // If the y value is 0 (no scroll) or negative (from the top of the page you scroll up), show the header
    if (lastY <= 0) return true;

    // If delta-y (i.e. the scroll amount) doesn't go over the tolerance, persist the existing visibility state
    if (Math.abs(dy) <= TOLERANCE) return isVisible;

    return dy > TOLERANCE;
  }

  $: isVisible = checkVisibility(y);
</script>

<svelte:window bind:scrollY={y} />

<header
  class:headerHidden={!isVisible}
  class="pointer-events-auto sticky top-0 left-0 z-10 w-full translate-y-0 opacity-100 backdrop-blur-[10px] transition-all duration-300 before:absolute before:bottom-0 before:h-px before:w-full before:bg-header before:content-[''] after:pointer-events-none after:absolute after:top-0 after:left-0 after:-z-[1] after:h-full after:w-full after:bg-blue-400 after:opacity-75 after:content-['']"
>
  <Container>
    <div
      class="flex w-full items-center justify-between py-[18px] text-grayscale-100"
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
    class="relative flex w-full justify-center overflow-hidden before:absolute before:top-0 before:h-px before:w-full before:bg-header before:content-[''] lg:hidden"
  >
    <Navbar
      {sections}
      class="w-10/12 overflow-scroll py-[14px] sm:justify-center"
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
