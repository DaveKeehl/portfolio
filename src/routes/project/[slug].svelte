<script context="module">
	import { url, getProjectBySlug } from '$utils/queries';

	export async function load({ page, fetch }) {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: getProjectBySlug,
				variables: {
					slug: page.params.slug
				}
			})
		});

		if (res.ok) {
			const { project, header, footer } = (await res.clone().json()).data;
			return {
				props: {
					project,
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
	import Layout from '$lib/templates/Layout.svelte';
	import Project from '$lib/pages/Project.svelte';
	import type { IFooter, IHeader, IProject } from '$utils/lib';

	export let project: IProject;
	export let header: IHeader;
	export let footer: IFooter;
</script>

<Layout {header} {footer}>
	<Project {project} />
</Layout>
