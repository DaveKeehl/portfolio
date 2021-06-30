<script lang="ts">
	import ProjectDescription from '$lib/molecules/ProjectDescription.svelte';
	import type { IButton } from '$utils/lib';

	export let imagePath: string;
	export let imageAlt: string;
	export let title: string;
	export let technologies: string[];
	export let excerpt: string;
	export let primaryButton: IButton;
	export let secondaryButton: IButton;
</script>

<img src={imagePath} alt={imageAlt} />
<ProjectDescription {title} {technologies} {excerpt} {primaryButton} {secondaryButton} />
