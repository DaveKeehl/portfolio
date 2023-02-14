<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';

  export let portableText: MarkComponentProps;
</script>

<pre><slot /></pre>

<style>
  pre {
    font-family: theme('fontFamily.code');
    display: inline;
    background: hsl(216deg 90% 3%);
    padding: 2px 6px;
    border: 1px solid hsl(216deg 40% 15%);
    border-radius: 6px;
    color: hsl(354deg 100% 65%);
    font-size: 1rem;
  }
</style>
