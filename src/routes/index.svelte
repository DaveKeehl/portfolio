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
			const { homepage, projects, header, footer } = (await res.json()).data;
			return {
				props: {
					homepage,
					projects,
					header,
					footer
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

	import type { IHeader, IHomepage, IFooter, IProject } from '$utils/lib';

	export let homepage: IHomepage;
	export let projects: IProject[];
	export let header: IHeader;
	export let footer: IFooter;
</script>

<Layout {header} {footer} homepage={true}>
	<Home {homepage} {projects} />
</Layout>
