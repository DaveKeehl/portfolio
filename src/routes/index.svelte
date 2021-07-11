<script context="module" lang="ts">
	import { url, getHomepage } from '$utils/queries';

	export async function load({ fetch }) {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: getHomepage
			})
		});

		if (res.ok) {
			return {
				props: {
					data: (await res.json()).data.homepage
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import Home from '$lib/pages/Home.svelte';
	import Layout from '$lib/templates/Layout.svelte';

	import type { IHomepage } from '$utils/lib';

	export let data: IHomepage;
	const { header, footer } = data;
</script>

<Layout {header} {footer} homepage={true}>
	<Home {data} />
</Layout>
