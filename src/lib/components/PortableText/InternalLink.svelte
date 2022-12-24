<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';

  export let portableText: MarkComponentProps<{
    type: string;
    slug: string;
  }>;
</script>

<a href={`/${portableText.value.type}/${portableText.value.slug}`}>
  <slot />
</a>
