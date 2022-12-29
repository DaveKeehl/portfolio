<script lang="ts">
  import type { IPostPreview } from '$utils/lib';
  import { fade } from 'svelte/transition';
  import BlogCard from './BlogCard.svelte';
  import Button from './Button.svelte';

  export let chunkSize = 4;
  export let posts: IPostPreview[];
  export let relatedPosts = false;

  const gridLayout = relatedPosts
    ? 'lg:grid-cols-relatedBlogPosts'
    : 'lg:grid-cols-blogPosts';

  let cursor = chunkSize;

  $: visiblePosts = posts.slice(0, cursor);

  const showMorePosts = () => (cursor += chunkSize);
</script>

<div class={`grid grid-cols-1 ${gridLayout} gap-x-5 gap-y-14`}>
  {#each visiblePosts as card, idx}
    <BlogCard {...card} />
  {/each}
</div>

{#if cursor < posts.length}
  <div
    class="mt-20 grid place-items-center"
    transition:fade|local={{ duration: 100 }}
  >
    <Button on:click={showMorePosts}>Load more posts</Button>
  </div>
{/if}
