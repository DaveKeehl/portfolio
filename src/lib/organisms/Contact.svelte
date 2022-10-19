<script lang="ts">
	import Section from '$templates/Section.svelte';
	import { reveal } from 'svelte-reveal';
	import type { IContact } from '$utils/lib';

	export let contact: IContact;
	const { heading, content } = contact;
</script>

<Section number={4} id="contact">
	<div use:reveal={{ delay: 200, marginBottom: -30 }}>
		<h2 class="margin-bottom-small">{heading}</h2>
		<p class="p4--regular">{content}</p>
	</div>
</Section>

<style>
	a {
		display: block;
		margin-top: 1.5rem;
		width: fit-content;
	}
</style>
