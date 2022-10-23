<script lang="ts">
	import Layout from '$lib/utils/Layout.svelte';
	import Project from '$lib/pages/Project.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { project, header, footer } = data;
	$: ({ project, header, footer } = data);
</script>

<Layout {header} {footer}>
	<Project {project} />
</Layout>
