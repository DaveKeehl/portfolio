<script lang="ts">
  import Label from '$lib/components/Label.svelte';
  import SanityImage from './SanityImage.svelte';

  import { deCamelCase } from '$utils/functions';
  import type { IImage } from '$utils/lib';

  export let title: string;
  export let slug: string;
  export let image: IImage;
  export let _type: string;
  export let excerpt: string;

  $: cleanType = deCamelCase(_type);

  $: resource = _type === 'caseStudy' ? 'project' : 'article';
  $: href = `/${resource}/${slug}`;
</script>

<div class="flex flex-col">
  <a
    {href}
    class="mb-6 flex overflow-hidden rounded-2xl border border-turquoise-200/5"
  >
    <SanityImage
      src={image.url}
      alt={image.alt}
      class="aspect-video w-full object-cover transition-transform hover:scale-[1.02]"
      loading="lazy"
    />
  </a>
  <Label>{cleanType}</Label>
  <a {href} class="h3-bold mt-4 mb-2 block w-fit">{title}</a>
  <p class="p5-regular text-blue-100 opacity-80">{excerpt}</p>
</div>
