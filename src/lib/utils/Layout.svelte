<script lang="ts">
	import Header from '$lib/sections/Header.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import type { IHeader, IFooter } from '$utils/lib';

	export let header: IHeader;
	export let footer: IFooter;
</script>

<Header {header} />
<slot />
<Footer {footer} />
