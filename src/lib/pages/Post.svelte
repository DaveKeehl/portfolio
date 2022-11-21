<script lang="ts">
  import { onMount } from 'svelte';

  import Header from '$lib/sections/Header.svelte';
  import RelatedPosts from '$components/Posts/RelatedPosts.svelte';
  import FrontMatter from '$components/Posts/FrontMatter.svelte';
  import SEO from '$lib/utils/SEO.svelte';
  import PostFooter from '$components/Posts/PostFooter.svelte';
  import PostContent from '$components/Posts/PostContent.svelte';

  import { section } from '$utils/stores';
  import type {
    IFooter,
    IHeader,
    IImage,
    IPostPreview,
    ISiteSettings
  } from '$utils/lib';

  export let siteSettings: ISiteSettings;
  export let header: IHeader;
  export let footer: IFooter;
  export let title: string;
  export let label: string;
  export let _createdAt: string;
  export let image: IImage;
  export let content: any;
  export let relatedPosts: IPostPreview[];
  export let maxWidth: number;

  onMount(() => section.set(''));
</script>

<SEO
  title={`${title} | Davide Ciulla`}
  description={siteSettings.tagline}
  openGraph={{ image: image.url }}
/>

<Header {header} />

<FrontMatter {label} {_createdAt} {title} {content} />

<PostContent {maxWidth} {image}>
  <slot />
</PostContent>

<RelatedPosts {maxWidth} posts={relatedPosts} />

<PostFooter {maxWidth} {footer} />
