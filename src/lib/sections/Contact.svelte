<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import Section from '$lib/utils/Section.svelte';
	import RichContent from '$components/RichContent.svelte';

	import type { IContact } from '$utils/lib';
	import { section } from '$utils/stores';
	import { css } from '$utils/stitches.config';

	export let contact: IContact;
	const { heading, content } = contact;

	let element: HTMLElement;

	const textStyles = css({
		'& a': {
			p4: 'code',
			display: 'block',
			width: 'fit-content',
			marginTop: '20px',
			fontWeight: '700'
		}
	});
</script>

<IntersectionObserver {element} on:intersect={() => section.set('contact')}>
	<div bind:this={element}>
		<Section id="contact" {heading} headingGap="small" icon="ChatTeardropDots">
			<RichContent class={textStyles()} {content} />
		</Section>
	</div>
</IntersectionObserver>
