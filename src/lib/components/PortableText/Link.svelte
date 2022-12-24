<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';

  export let portableText: MarkComponentProps<{
    url: string;
  }>;
</script>

<a href={portableText.value.url} target="_blank" rel="noreferrer">
  <slot />
</a>
