<script lang="ts">
	import Header from '$organisms/Header.svelte';
	import Footer from '$organisms/Footer.svelte';
	import type { IHeader, IFooter } from '$utils/lib';

	export let header: IHeader;
	export let footer: IFooter;
	export let homepage: boolean = false;
	export let article: boolean = false;
</script>

<Header {header} />
<slot />
<Footer {footer} />

<style lang="scss" global>
	/* @import '../../styles/colors.scss'; */
	/* @import '../../styles/typography.scss'; */
	/* @import '../../styles/global.scss'; */
</style>
