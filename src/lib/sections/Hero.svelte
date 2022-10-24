<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { reveal } from 'svelte-reveal';

	import ButtonsGroup from '$lib/components/ButtonsGroup.svelte';
	import Container from '$lib/utils/Container.svelte';

	import { getHostname } from '$utils/functions';
	import type { IHero } from '$utils/lib';
	import { css } from '$utils/stitches.config';
	import { section } from '$utils/stores';

	export let hero: IHero;
	const { heading, greetings, buttons, description } = hero;

	let element: HTMLElement | undefined;

	const sectionStyles = css({
		paddingBlock: '128px',
		position: 'relative',
		overflow: 'hidden',

		'@lg': {
			paddingBlock: '200px'
		}
	});

	const containerStyles = css({
		display: 'flex',
		flexDirection: 'column',
		gap: '48px'
	});

	const introductionStyles = css({
		display: 'flex',
		flexDirection: 'column',
		gap: '16px'
	});

	const greetingStyles = css({
		p1: 'semiBold',
		color: '$turquoise-200',
		width: 'fit-content',
		background:
			'linear-gradient(to right, $turquoise-100 0%, $turquoise-300 100%)',
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
		backgroundClip: 'text',
		textFillColor: 'transparent'
	});

	const headingStyles = css({
		h1: 'bold',
		textShadow: '0 4px 24px rgba(2, 19, 39, 0.7)'
	});

	const descriptionStyles = css({
		p3: 'regular',
		color: '$blue-100',
		maxWidth: '600px'
	});

	const circleStyles = css({
		position: 'absolute',
		bottom: '0',
		left: '50%',
		zIndex: '-1',
		transform: 'translate(-50%, 50%)',
		width: '600px',
		aspectRatio: '1/1',
		background: '$blue-100',
		filter: 'blur(180px)',
		opacity: '0.25',
		borderRadius: '100%'
	});

	const strokeBaseElementStyles = css({
		position: 'relative'
	});

	const strokeStyles = css({
		position: 'absolute',
		zIndex: '-1',
		top: '50%',
		left: '0',
		transform: 'translateY(-50%)'
	});
</script>

<IntersectionObserver
	{element}
	on:intersect={() => section.set('welcome')}
	threshold={0.5}
>
	<section class={sectionStyles()} id="welcome" bind:this={element}>
		<Container class={containerStyles()}>
			<div class={introductionStyles()}>
				<p class={greetingStyles()} use:reveal>{greetings}</p>
				<h1 class={headingStyles()} use:reveal={{ delay: 100 }}>
					{heading.split(' ')[0]}{' '}<span
						class={`${strokeBaseElementStyles()} stroke`}
						>{heading.split(' ')[1]}<img
							src="/stroke.svg"
							alt=""
							class={strokeStyles()}
						/></span
					>{' '}{heading.split(' ').slice(2).join(' ')}
				</h1>
			</div>
			<p class={descriptionStyles()} use:reveal={{ delay: 200 }}>
				{description}
			</p>
			<div class="button" use:reveal={{ delay: 300 }}>
				<ButtonsGroup
					size="large"
					primary={{
						text: buttons.primary,
						href: `${getHostname()}#projects`,
						external: false
					}}
					secondary={{
						text: buttons.secondary,
						href: `${getHostname()}#contact`,
						external: false
					}}
				/>
			</div>
		</Container>
		<div class={circleStyles()} />
	</section>
</IntersectionObserver>
