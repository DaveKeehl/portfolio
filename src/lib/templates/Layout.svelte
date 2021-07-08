<script lang="ts">
	// import '@fontsource/poppins.css';
	// import '@fontsource/inter.css';
	import Header from '$lib/organisms/Header.svelte';
	import Footer from '$lib/organisms/Footer.svelte';
	import type { IHeader, IFooter } from '$utils/lib';

	export let header: IHeader;
	export let footer: IFooter;
</script>

<Header {header} />
<slot />
<Footer {footer} />

<style lang="scss" global>
	@import '../../styles/colors.scss';
	@import '../../styles/typography.scss';
	@import '../../styles/global.scss';
</style>
