<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import Section from '$templates/Section.svelte';
	import Button from '$atoms/Button.svelte';
	import { css } from '$utils/stitches.config';
	import type { IAbout } from '$utils/lib';
	import { section } from '$utils/stores';

	export let about: IAbout;
	const { heading, content, image, button } = about;

	let element: HTMLElement | undefined;
	let intersecting: boolean;
	$: console.log({ intersecting });

	const sectionStyles = css({
		paddingBlock: '128px 72px',
		background:
			'linear-gradient(to bottom, $grayscale-300 31.25%, $blue-400 100%)'
	});

	const contentStyles = css({
		display: 'flex',
		flexDirection: 'column',
		gap: '40px',
		position: 'relative'
	});

	const textStyles = css({
		p4: 'regular'
	});

	const imageStyles = css({
		width: '295px',
		height: '420px',
		background: `linear-gradient(52.82deg, rgba(2, 19, 39, 0.8) 18.42%, rgba(2, 19, 39, 0) 107.21%), url(${image})`,
		position: 'absolute',
		top: '0',
		right: '0',
		transform: 'rotate(-5.4deg)',
		opacity: '0.8',
		borderRadius: '16px',
		mixBlendMode: 'lighten',
		backgroundSize: 'cover',
		backgroundPosition: '-200px'
	});
</script>

<IntersectionObserver
	{element}
	on:intersect={() => section.set('about')}
	threshold={0.5}
>
	<div bind:this={element}>
		<Section
			{heading}
			icon="HandWaving"
			headingGap="small"
			id="about"
			class={sectionStyles()}
		>
			<div class={contentStyles()}>
				<p class={textStyles()}>{content}</p>
				<Button href="cv.pdf" external>{button}</Button>
				<div class={imageStyles()} />
			</div>
		</Section>
	</div>
</IntersectionObserver>
