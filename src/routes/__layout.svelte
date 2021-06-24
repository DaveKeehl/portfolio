<script>
	import Head from '$lib/templates/Head.svelte';
	import Header from '$lib/molecules/Header.svelte';
	import Footer from '$lib/molecules/Footer.svelte';
</script>

<Head />
<Header />
<slot />
<Footer />
