<script lang="ts">
	import Layout from '$lib/templates/Layout.svelte';
	import Project from '$lib/pages/Project.svelte';
	import type { PageData } from './$types';
	import type { IFooter, IHeader, IProject } from '$utils/lib';

	export let data: PageData;
	let { project, header, footer } = data;
	$: ({ project, header, footer } = data);

	// export let project: IProject;
	// export let header: IHeader;
	// export let footer: IFooter;
</script>

<Layout {header} {footer}>
	<Project {project} />
</Layout>
