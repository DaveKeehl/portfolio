<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { css } from '$utils/stitches.config';

	let className = '';

	export let content: any;
	export { className as class };

	const richContentStyles = css({
		color: '$blue-100',
		textAlign: 'left',

		'& > *:not(:last-child)': {
			marginBottom: '24px'
		},

		'&:first-child': {
			marginTop: '0'
		},

		'& p': {
			p4: 'regular',
			opacity: '0.9'
		},

		'& a': {
			color: '$turquoise-200',

			'&:hover': {
				textDecoration: 'underline'
			}
		},

		'& h1, h2, h3, h4': {
			color: '$grayscale-100'
		},

		'& h1:not(:first-child), h2:not(:first-child), h3:not(:first-child), h4:not(:first-child)':
			{
				marginBlock: '64px 32px'
			},

		'& h1': {
			h1: 'bold'
		},

		'& h2': {
			h2: 'bold'
		},

		'& h3': {
			h3: 'bold'
		}
	});
</script>

<div class={`${richContentStyles()} ${className}`}>
	<PortableText value={content} />
</div>
