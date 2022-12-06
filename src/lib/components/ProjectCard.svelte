<script lang="ts">
  import { cva } from 'cva';
  import ButtonsGroup from '$lib/components/ButtonsGroup.svelte';
  import Label from '$lib/components/Label.svelte';
  import SanityImage from './SanityImage.svelte';

  import type { IProject } from '$utils/lib';

  export let project: IProject;
  export let reversed = false;

  const { title, slug, image, liveButton, excerpt, type } = project;

  $: href = `/project/${slug}`;

  const imageContainerStyles = cva(
    [
      'flex',
      'col-[5/-1]',
      'row-[1/2]',
      'relative',
      'rounded-[20px]',
      'overflow-hidden',
      'border',
      'border-solid',
      'border-turquoise-200/5',
      'mb-5',
      'lg:mb-0',
      "before:content-['']",
      'before:hidden',
      'before:absolute',
      'before:bg-project-card',
      'before:top-0',
      'before:left-0',
      'before:w-full',
      'before:h-full',
      'before:z-[5]',
      'before:pointer-events-none',
      'before:lg:block'
    ],
    {
      variants: {
        reversed: {
          true: ['col-[1/7]', 'before:bg-project-card-reversed']
        }
      }
    }
  );

  const contentStyles = cva(['z-[5]', 'col-[1/6]', 'row-[1/2]'], {
    variants: {
      reversed: {
        true: ['col-[6/-1]']
      }
    }
  });
</script>

<div
  class="flex flex-col lg:grid lg:grid-cols-10 lg:grid-rows-1 lg:items-center"
>
  <a {href} class={imageContainerStyles({ reversed })}>
    <SanityImage
      src={image.url}
      alt={title}
      class="w-full h-full [aspect-ratio:16/10] object-cover transition-transform duration-300 hover:scale-[1.02]"
      loading="lazy"
    />
  </a>

  <div class={contentStyles({ reversed })}>
    <Label>{type}</Label>

    <a {href} class="h3-bold block w-fit mt-5 mb-4">{title}</a>

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
