<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import RichContent from '$components/RichContent.svelte';

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
		'& > *:not(:last-child)': {
			marginBottom: '0 !important'
		},

		'& p': {
			p5: 'regular'
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
			p5: 'semiBold'
		}
	});
</script>

<footer use:reveal class={footerStyles()}>
	<RichContent class={textStyles()} {content} />
</footer>
