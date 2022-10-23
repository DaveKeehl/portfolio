<script lang="ts">
	import { afterUpdate } from 'svelte';
	import Home from '$lib/pages/Home.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { homepage, siteSettings } = data;
	let show = false;

	afterUpdate(() => {
		show = true;
	});
</script>

{#if show}
	<Home {homepage} {siteSettings} />
{/if}
