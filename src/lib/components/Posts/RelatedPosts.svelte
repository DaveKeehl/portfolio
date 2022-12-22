<script lang="ts">
  import BlogCards from '$components/BlogCards.svelte';

  import type { IPostPreview } from '$utils/lib';

  export let posts: IPostPreview[];
  export let maxWidth: number;
</script>

<div class="w-10/12 my-0 mx-auto mb-40" style={`max-width: ${maxWidth}px`}>
  <h2 class="h2-bold mb-14">Related posts.</h2>
  <BlogCards {posts} relatedPosts />
</div>
