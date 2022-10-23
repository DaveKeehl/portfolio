<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import { PortableText } from '@portabletext/svelte';

	import Container from '$templates/Container.svelte';

	import type { IFooter } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let footer: IFooter;
	const { content } = footer;

	const footerStyles = css({
		paddingBottom: '80px'
	});

	const containerStyles = css({
		position: 'relative',
		paddingTop: '40px',

		'&::before': {
			content: '',
			position: 'absolute',
			top: '0',
			left: '0',
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
	<Container class={containerStyles()}>
		<div class={textStyles()}>
			<PortableText value={content} />
		</div>
	</Container>
</footer>
