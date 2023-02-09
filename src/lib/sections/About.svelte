<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { PortableText } from '@portabletext/svelte';

  import Section from '$lib/utils/Section.svelte';
  import Button from '$lib/components/Button.svelte';

  import type { IAbout } from '$utils/lib';
  import { section } from '$utils/stores';
  import SanityImage from '$components/SanityImage.svelte';

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
      class="bg-about pt-24"
    >
      <div class="relative flex flex-col gap-10">
        <div
          class="p4-regular rich-text-about w-full text-blue-100 opacity-90 lg:w-9/12"
        >
          <PortableText value={content} />
        </div>
        <Button href="/davide_ciulla_cv.pdf" external>{button}</Button>
        <div
          class="group absolute top-0 right-0 hidden h-[420px] w-[295px] -rotate-[5.4deg] rounded-2xl mix-blend-lighten outline outline-turquoise-200/[.06] transition-transform duration-300 hover:-rotate-[4deg] lg:block"
        >
          <div
            class="absolute top-0 left-0 z-10 h-full w-full bg-about-img transition-opacity duration-300 group-hover:opacity-80"
          />
          <SanityImage
            src={image.url}
            alt={image.alt}
            class="absolute top-0 left-0 h-full w-full rounded-2xl bg-cover object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>
      </div>
    </Section>
  </div>
</IntersectionObserver>

<style lang="scss" global>
  .rich-text-about {
    a {
      text-decoration: underline;

      &:hover {
        color: theme('colors.grayscale.100');
      }
    }
  }
</style>
