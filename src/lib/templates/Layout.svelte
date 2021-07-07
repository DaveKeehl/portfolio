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

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: $blue-300;
		color: $white;
		font-family: 'Inter';
	}

	section.section {
		margin-bottom: 16rem;

		h2 {
			&.margin-bottom-large {
				margin-bottom: 6rem;
			}

			&.margin-bottom-small {
				margin-bottom: 2.5rem;
			}
		}
	}

	a {
		color: $turquoise-200;
		text-decoration: none;
	}

	button {
		border: 0;

		&:hover {
			cursor: pointer;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Poppins';
	}
</style>
