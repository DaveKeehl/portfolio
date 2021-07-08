<script lang="ts">
	// import '@fontsource/poppins.css';
	// import '@fontsource/inter.css';

	import Container from '$lib/templates/Container.svelte';
	import Header from '$lib/organisms/Header.svelte';
	import Footer from '$lib/organisms/Footer.svelte';
	import type { IHeader, IFooter } from '$utils/lib';

	export let header: IHeader;
	export let footer: IFooter;
</script>

<Container>
	<Header {header} />
</Container>

<slot />

<Container>
	<Footer {footer} />
</Container>

<style lang="scss" global>
	@import '../../styles/colors.scss';
	@import '../../styles/typography.scss';
	@import '../../styles/global.scss';
</style>
