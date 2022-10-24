<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { PortableText } from '@portabletext/svelte';

	import Section from '$lib/utils/Section.svelte';

	import type { IContact } from '$utils/lib';
	import { section } from '$utils/stores';
	import { css } from '$utils/stitches.config';

	export let contact: IContact;
	const { heading, content } = contact;

	let element: HTMLElement;

	const textStyles = css({
		'& > *': {
			p4: 'regular',
			color: '$blue-100',
			opacity: '0.9'
		},

		'& a': {
			p4: 'code',
			display: 'block',
			width: 'fit-content',
			marginTop: '20px',
			fontWeight: '700',
			color: '$turquoise-200',

			'&:hover': {
				textDecoration: 'underline'
			}
		}
	});
</script>

<IntersectionObserver {element} on:intersect={() => section.set('contact')}>
	<div bind:this={element}>
		<Section id="contact" {heading} headingGap="small" icon="ChatTeardropDots">
			<div class={textStyles()}>
				<PortableText value={content} />
			</div>
		</Section>
	</div>
</IntersectionObserver>
