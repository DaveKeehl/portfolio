<script lang="ts">
	import ButtonsGroup from '$lib/molecules/ButtonsGroup.svelte';

	export let title: string;
	export let technologies: string[];
	export let excerpt: string;
	export let primaryButton;
	export let secondaryButton;
</script>

<h2>{title}</h2>
<p>{technologies.concat('  ')}</p>
<p>{excerpt}</p>

<ButtonsGroup primary={primaryButton} secondary={secondaryButton} direction="horizontal" />
