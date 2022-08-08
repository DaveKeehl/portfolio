<script lang="ts">
	import Section from '$templates/Section.svelte';
	import { reveal } from 'svelte-reveal';
	import type { IContact } from '$utils/lib';

	export let contact: IContact;
	const { title, text, email } = contact;
</script>

<Section number={4} id="contact">
	<div use:reveal={{ delay: 200, marginBottom: -30 }}>
		<h2 class="margin-bottom-small">{title}</h2>
		<p class="p4--regular">{text}</p>
		<a class="p4--semibold" href={`mailto:${email}`}>{email}</a>
	</div>
</Section>

<style>
	a {
		display: block;
		margin-top: 1.5rem;
		width: fit-content;
	}
</style>
