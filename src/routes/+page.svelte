<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import Home from '$lib/pages/Home.svelte';
  import type { PageData } from './$types';
  import { section } from '$utils/stores';

  export let data: PageData;
  let { siteSettings, homepage, header, footer } = data;
  let show = false;

  onMount(() => section.set(''));

  afterUpdate(() => {
    show = true;
  });
</script>

{#if show}
  <Home {siteSettings} {homepage} {header} {footer} />
{/if}
