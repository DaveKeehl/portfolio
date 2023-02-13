<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import nightOwl from 'svelte-highlight/styles/night-owl';
  import type { MarkComponentProps } from '@portabletext/svelte';

  export let portableText: MarkComponentProps<{
    code: string;
    language: string;
    _type: string;
  }>;
</script>

<svelte:head>
  {@html nightOwl}
</svelte:head>

<HighlightSvelte code={portableText.value.code} />
