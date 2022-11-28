<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { PortableText } from '@portabletext/svelte';

  import Section from '$lib/utils/Section.svelte';
  import Button from '$lib/components/Button.svelte';

  import { css } from '$utils/stitches.config';
  import type { IAbout } from '$utils/lib';
  import { section } from '$utils/stores';

  export let about: IAbout;
  const { heading, content, image, button } = about;

  let element: HTMLElement | undefined;

  const textStyles = css({
    width: '100%',

    '@lg': {
      width: '75%'
    },

    '& > *': {
      p4: 'regular',
      color: '$blue-100',
      opacity: '0.9'
    },

    '& a': {
      textDecoration: 'underline',

      '&:hover': {
        color: '$grayscale-100'
      }
    }
  });

  const imageStyles = css({
    display: 'none',
    background: `url(${image.url})`,
    position: 'absolute',
    width: '295px',
    height: '420px',
    top: '0',
    right: '0',
    transform: 'rotate(-5.4deg)',
    opacity: '0.8',
    borderRadius: '16px',
    mixBlendMode: 'lighten',
    backgroundSize: 'cover',
    backgroundPosition: '-200px',
    outline: '1px solid $turquoise-200-A10',
    transition: 'transform 0.3s',

    '@lg': {
      display: 'block'
    },

    '&::before': {
      content: '',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: `linear-gradient(52.82deg, rgba(2, 19, 39, 0.8) 18.42%, rgba(2, 19, 39, 0) 107.21%)`,
      borderRadius: '16px',
      transition: 'opacity 0.3s'
    },

    '&:hover': {
      transform: 'rotate(-4deg)',

      '&::before': {
        opacity: '0.6'
      }
    }
  });
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
        <div class={textStyles()}>
          <PortableText value={content} />
        </div>
        <Button href="/davide_ciulla_cv.pdf" external>{button}</Button>
        <div
          class="hidden absolute w-[295px] h-[420px] top-0 right-0 -rotate-[5.4deg] hover:-rotate-[4deg] lg:block transition-transform duration-300 rounded-2xl outline outline-turquoise-200/10 overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-full h-full bg-about-img z-10 transition-opacity hover:opacity-60 duration-300"
          />
          <img
            src={image.url}
            alt=""
            class="absolute top-0 left-0 w-full h-full bg-cover bg-[-200px] object-cover object-[-200px] mix-blend-lighten opacity-80"
          />
        </div>
      </div>
    </Section>
  </div>
</IntersectionObserver>
