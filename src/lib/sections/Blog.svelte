<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import Pill from '$lib/components/Pill.svelte';
  import Section from '$lib/utils/Section.svelte';

  import type { IBlog, IPostPreview } from '$utils/lib';
  import { deCamelCase } from '$utils/functions';
  import { section } from '$utils/stores';
  import BlogCards from '$components/BlogCards.svelte';

  export let blog: IBlog;
  const { heading, labels, posts } = blog;

  const CHUNK = 4;
  let cursor = CHUNK;

  let selectedLabels: Set<string> = new Set();

  $: hasPostMatchingLabel = (post: IPostPreview) => {
    if (selectedLabels.size === 0) return true; // If there are no filters, returns all posts
    return selectedLabels.has(deCamelCase(post._type)); // else, a post is visible if the corresponding label is selected
  };

  $: filteredPosts = posts.filter((post) => hasPostMatchingLabel(post));

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
      <div class="mb-16 flex flex-wrap items-center gap-3">
        {#each cleanLabels as label}
          <Pill
            selected={selectedLabels.has(label)}
            text={label}
            on:click={() => toggleLabel(label)}
          />
        {/each}
      </div>

      <BlogCards posts={filteredPosts} />
    </Section>
  </div>
</IntersectionObserver>
