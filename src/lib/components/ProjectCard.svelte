<script lang="ts">
  import ButtonsGroup from '$lib/components/ButtonsGroup.svelte';
  import Label from '$lib/components/Label.svelte';
  import SanityImage from './SanityImage.svelte';

  import type { IProject } from '$utils/lib';
  import { css } from '$utils/stitches.config';

  export let project: IProject;
  export let reversed = false;

  const { title, slug, image, liveButton, excerpt, type } = project;

  const imageContainerStyles = css({
    display: 'flex',
    gridColumn: '5 / -1',
    gridRow: '1 / 2',
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid $turquoise-200-A05',
    marginBottom: '20px',

    '@lg': {
      marginBottom: '0'
    },

    '&::before': {
      content: '',
      display: 'none',
      position: 'absolute',
      background:
        'linear-gradient(90deg, rgba(2, 19, 38, 0.9) 10%, rgba(2, 21, 43, 0.2) 50%)',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '5',
      pointerEvents: 'none',

      '@lg': {
        display: 'block'
      }
    },

    variants: {
      reversed: {
        true: {
          gridColumn: '1 / 7',

          '&::before': {
            background:
              'linear-gradient(90deg, rgba(2, 21, 43, 0.2) 50%, rgba(2, 19, 38, 0.9) 90%)'
          }
        }
      }
    }
  });

  const contentStyles = css({
    zIndex: '5',
    gridColumn: '1 / 6',
    gridRow: '1 / 2',

    variants: {
      reversed: {
        true: {
          gridColumn: '6 / -1'
        }
      }
    }
  });
</script>

<div
  class="flex flex-col lg:grid lg:grid-cols-10 lg:grid-rows-1 lg:items-center"
>
  <div class={imageContainerStyles({ reversed })}>
    <SanityImage
      src={image.url}
      alt={title}
      class="w-full h-full [aspect-ratio:16/10] object-cover transition-transform duration-300 hover:scale-[1.02]"
      loading="lazy"
    />
  </div>

  <div class={contentStyles({ reversed })}>
    <Label>{type}</Label>

    <a href={`/project/${slug}`} class="h3-bold block w-fit mt-5 mb-4"
      >{title}</a
    >

    <p class="p5-regular opacity-90 text-blue-100 mb-9">{excerpt}</p>

    <ButtonsGroup
      size="small"
      primary={{
        text: liveButton.text,
        href: liveButton.url,
        external: true
      }}
      secondary={{
        text: 'Go to case study',
        href: `/project/${slug}`,
        external: false
      }}
    />
  </div>
</div>
