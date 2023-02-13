<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import githubDark from 'svelte-highlight/styles/github-dark';
  import type { MarkComponentProps } from '@portabletext/svelte';

  export let portableText: MarkComponentProps<{
    code: string;
    language: string;
    _type: string;
  }>;
</script>

<svelte:head>
  {@html githubDark}
</svelte:head>

<HighlightSvelte code={portableText.value.code} />
