<script lang="ts">
	import { getHostname } from '$utils/functions';
	import type { IOpenGraph } from '$utils/lib';

	export let title: string;
	export let description: string;
	export let openGraph: IOpenGraph;
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta httpEquiv="x-ua-compatible" content="ie=edge" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, shrink-to-fit=no"
	/>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={getHostname()} />
	<meta property="og:image" content={openGraph.image.url} />
	<meta property="twitter:card" content="summary_card_large" />
	<meta property="twitter:creator" content="Davide Ciulla" />
	<meta property="twitter:description" content={description} />
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="/favicon/apple-touch-icon.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon/favicon-32x32.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon/favicon-16x16.png"
	/>
	<link rel="manifest" href="/favicon/site.webmanifest" />
	<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#031f40" />
	<meta name="msapplication-TileColor" content="#021127" />
	<meta name="theme-color" content="#021127" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
