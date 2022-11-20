<script lang="ts">
	import Footer from '$lib/sections/Footer.svelte';

	import type { IFooter } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let footer: IFooter;
	export let maxWidth: number;

	const footerContainerStyles = css({
		width: '80%',
		maxWidth: `${maxWidth}px`,
		margin: '0 auto'
	});
</script>

<div class={footerContainerStyles()}>
	<Footer {footer} />
</div>
