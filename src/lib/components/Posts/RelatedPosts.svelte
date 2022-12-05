<script lang="ts">
  import BlogCard from '$components/BlogCard.svelte';

  import type { IPostPreview } from '$utils/lib';

  export let posts: IPostPreview[];
  export let maxWidth: number;
</script>

<div class="w-4/5 my-0 mx-auto mb-40" style={`max-width: ${maxWidth}px`}>
  <h2 class="h2-bold mb-14">Related posts.</h2>
  <div class="grid grid-cols-1 lg:grid-cols-blogPosts gap-x-5 gap-y-14">
    {#each posts as card}
      <BlogCard {...card} />
    {/each}
  </div>
</div>
