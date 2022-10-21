<script lang="ts">
	import Container from '$templates/Container.svelte';
	import { reveal } from 'svelte-reveal';
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
</script>

<footer use:reveal class={footerStyles()}>
	<Container class={containerStyles()}>
		{@html content}
	</Container>
</footer>
