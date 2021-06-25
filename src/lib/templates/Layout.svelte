<script>
	// import '@fontsource/poppins.css';
	// import '@fontsource/inter.css';

	import Container from '$lib/templates/Container.svelte';
	import Header from '$lib/molecules/Header.svelte';
	import Footer from '$lib/molecules/Footer.svelte';
</script>

<Container>
	<Header />
</Container>

<slot />

<Container>
	<Footer />
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
