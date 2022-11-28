<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { PortableText } from '@portabletext/svelte';

  import Section from '$lib/utils/Section.svelte';
  import Button from '$lib/components/Button.svelte';

  import type { IAbout } from '$utils/lib';
  import { section } from '$utils/stores';

  export let about: IAbout;
  const { heading, content, image, button } = about;

  let element: HTMLElement | undefined;
</script>

<IntersectionObserver
  {element}
  on:intersect={() => section.set('about')}
  threshold={0.5}
>
  <div bind:this={element}>
    <Section
      {heading}
      icon="HandWaving"
      headingGap="small"
      id="about"
      class="pt-24 bg-about"
    >
      <div class="flex flex-col gap-10 relative">
        <div
          class="w-full lg:w-9/12 p4-regular text-blue-100 opacity-90 rich-text"
        >
          <PortableText value={content} />
        </div>
        <Button href="/davide_ciulla_cv.pdf" external>{button}</Button>
        <div
          class="hidden absolute w-[295px] h-[420px] top-0 right-0 -rotate-[5.4deg] hover:-rotate-[4deg] lg:block transition-transform duration-300 mix-blend-lighten outline outline-turquoise-200/[.06] rounded-2xl"
        >
          <div
            class="absolute top-0 left-0 w-full h-full bg-about-img z-10 transition-opacity hover:opacity-60 duration-300"
          />
          <img
            src={image.url}
            alt=""
            class="absolute top-0 left-0 w-full h-full bg-cover bg-[-200px] object-cover object-[-200px] opacity-80 rounded-2xl"
          />
        </div>
      </div>
    </Section>
  </div>
</IntersectionObserver>

<style lang="scss" global>
  .rich-text {
    a {
      text-decoration: underline;

      &:hover {
        color: theme('colors.grayscale.100');
      }
    }
  }
</style>
