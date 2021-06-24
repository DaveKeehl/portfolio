<script lang="ts">
	export let title: string = 'Davide Ciulla - UI/UX Designer and Front-End Web Developer';
	export let description: string =
		'Hi, my name is Davide Ciulla and I am a UI/UX Designer and Front-End Web Developer based in Ticino (Switzerland)';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://davideciulla.com" />
	<meta property="og:image" content="/og_image.png" />
	<meta property="twitter:card" content="summary_card_large" />
	<meta property="twitter:creator" content="Davide Ciulla" />
	<meta property="twitter:description" content={description} />
</svelte:head>
