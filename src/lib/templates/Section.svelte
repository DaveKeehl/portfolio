<script lang="ts">
	import Container from '$templates/Container.svelte';

	import { css, theme } from '$utils/stitches.config';
	import Icon from '$atoms/Icon.svelte';

	let className: string = '';
	export let heading: string;
	export let headingGap: 'small' | 'large';
	export { className as class };
	export let id: string = '';
	export let icon: 'Fire' | 'HandWaving' | 'Quotes' | 'ChatTeardropDots';

	const headingContainerStyles = css({
		display: 'flex',
		alignItems: 'center',
		gap: '32px',
		marginBottom: headingGap === 'small' ? '40px' : '80px'
	});

	const headingStyles = css({
		h2: 'bold'
	});

	const contentStyles = css({
		paddingLeft: '80px'
	});
</script>

<section {id} class={`${className}`.trim()}>
	<Container>
		<div class={headingContainerStyles()}>
			<Icon name={icon} size={48} color={theme.colors['grayscale-100'].name} />
			<h2 class={headingStyles()}>{heading}</h2>
		</div>
		<div class={contentStyles()}>
			<slot />
		</div>
	</Container>
</section>
