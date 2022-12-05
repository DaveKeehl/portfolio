<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fade } from 'svelte/transition';
  import { reveal } from 'svelte-reveal';

  import Button from '$lib/components/Button.svelte';
  import Pill from '$lib/components/Pill.svelte';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import Section from '$lib/utils/Section.svelte';

  import type { IBlog, IPostPreview } from '$utils/lib';
  import { deCamelCase } from '$utils/functions';
  import { section } from '$utils/stores';

  export let blog: IBlog;
  const { heading, labels, posts } = blog;

  const CHUNK = 2;
  let cursor = CHUNK;

  let selectedLabels: Set<string> = new Set();

  $: hasPostMatchingLabel = (post: IPostPreview) => {
    if (selectedLabels.size === 0) return true; // If there are no filters, returns all posts
    return selectedLabels.has(deCamelCase(post._type)); // else, a post is visible if the corresponding label is selected
  };

  $: filteredPosts = posts.filter((post) => hasPostMatchingLabel(post));
  $: visiblePosts = filteredPosts.slice(0, cursor);

  const showMorePosts = () => (cursor += CHUNK);

  const toggleLabel = (label: string) => {
    const hasLabelSelected = selectedLabels.has(label);
    const toggleAction = hasLabelSelected ? 'delete' : 'add';
    selectedLabels[toggleAction](label);
    selectedLabels = selectedLabels;
  };

  const cleanLabels = labels.map((label) => deCamelCase(label));

  let element: HTMLElement;
</script>

<IntersectionObserver
  {element}
  on:intersect={() => section.set('blog')}
  threshold={0.2}
>
  <div bind:this={element}>
    <Section
      id="blog"
      {heading}
      headingGap="small"
      icon="Quotes"
      class="scroll-pt-8"
    >
      <div
        class="flex items-center flex-wrap gap-3 mb-16"
        use:reveal={{ delay: 300 }}
      >
        {#each cleanLabels as label}
          <Pill
            selected={selectedLabels.has(label)}
            text={label}
            on:click={() => toggleLabel(label)}
          />
        {/each}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-blogPosts gap-x-5 gap-y-14">
        {#each visiblePosts as card, idx}
          <!-- <BlogCard {...card} {idx} {CHUNK} /> -->
          <BlogCard {...card} />
        {/each}
      </div>

      {#if cursor < filteredPosts.length}
        <div
          class="grid place-items-center mt-20"
          transition:fade|local={{ duration: 100 }}
          use:reveal={{ rootMargin: '0 0 20px 0' }}
        >
          <Button on:click={showMorePosts}>Load more posts</Button>
        </div>
      {/if}
    </Section>
  </div>
</IntersectionObserver>
