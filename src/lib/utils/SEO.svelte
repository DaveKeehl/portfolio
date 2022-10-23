<script lang="ts">
	import { getHostname } from '$utils/functions';

	export let title: string;
	export let description: string;
	export let image: string = '/og_image.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={getHostname()} />
	<meta property="og:image" content={image} />
	<meta property="twitter:card" content="summary_card_large" />
	<meta property="twitter:creator" content="Davide Ciulla" />
	<meta property="twitter:description" content={description} />
</svelte:head>
