<script lang="ts">
	import Section from '$templates/Section.svelte';
	import { reveal } from 'svelte-reveal';
	import type { IContact } from '$utils/lib';

	export let contact: IContact;
	const { heading, content } = contact;
</script>

<Section id="contact" {heading} headingGap="small" icon="ChatTeardropDots">
	<p class="p4--regular">{content}</p>
</Section>
