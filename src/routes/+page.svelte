<script lang="ts">
  import { onMount } from 'svelte';
  import Home from '$lib/pages/Home.svelte';
  import type { PageData } from './$types';
  import { section } from '$utils/stores';

  export let data: PageData;
  let { siteSettings, homepage, header, footer } = data;

  onMount(() => section.set(''));
</script>

<Home {siteSettings} {homepage} {header} {footer} />
