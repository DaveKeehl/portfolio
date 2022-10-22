<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import Section from '$templates/Section.svelte';

	import type { IContact } from '$utils/lib';
	import { section } from '$utils/stores';

	export let contact: IContact;
	const { heading, content } = contact;

	let element: HTMLElement;
	let intersecting: boolean;
</script>

<IntersectionObserver
	{element}
	bind:intersecting
	on:intersect={(e) => section.set('contact')}
>
	<Section
		id="contact"
		{heading}
		headingGap="small"
		icon="ChatTeardropDots"
		{element}
	>
		<p class="p4--regular">{content}</p>
	</Section>
</IntersectionObserver>
