<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import { PortableText } from '@portabletext/svelte';

	import Container from '$lib/utils/Container.svelte';

	import type { IFooter } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let footer: IFooter;
	const { content } = footer;

	const footerStyles = css({
		position: 'relative',
		paddingTop: '40px',
		paddingBottom: '80px',

		'&::before': {
			content: '',
			position: 'absolute',
			top: '0',
			// left: '80px',
			width: '50px',
			height: '1px',
			background: '$blue-200'
		}
	});

	const textStyles = css({
		'& > *': {
			p5: 'regular',
			color: '$blue-100'
		},

		'& p:last-child': {
			lineHeight: '20px'
		},

		'@media (min-width: 531px)': {
			'& p:last-child': {
				lineHeight: '10px'
			}
		},

		'& a': {
			p5: 'semiBold',
			color: '$turquoise-200',

			'&:hover': {
				textDecoration: 'underline'
			}
		}
	});
</script>

<footer use:reveal class={footerStyles()}>
	<div class={textStyles()}>
		<PortableText value={content} />
	</div>
</footer>
