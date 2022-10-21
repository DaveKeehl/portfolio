<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import ButtonsGroup from '$molecules/ButtonsGroup.svelte';
	import Container from '$templates/Container.svelte';

	import { getHostname } from '$utils/functions';
	import type { IHero } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let hero: IHero;
	const { heading, greetings, buttons, description } = hero;

	const sectionStyles = css({
		paddingBlock: '200px'
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
		opacity: '0.2',
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

<section class={sectionStyles()}>
	<Container class={containerStyles()}>
		<div class={introductionStyles()}>
			<p class={greetingStyles()} use:reveal>{greetings}</p>
			<h1 class={headingStyles()} use:reveal={{ delay: 100 }}>
				{heading.split(' ')[0]}{' '}<span class={strokeBaseElementStyles()}
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

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	/* section {
		padding-top: 14rem;
		padding-bottom: 12rem;
		position: relative;

		@media (min-width: $tablet-l) {
			padding-top: 20rem;
			padding-bottom: 18rem;
		}
	} */

	/* .introduction {
		margin-bottom: 3.5rem;
		width: 100%;
		animation-delay: 0.4s;

		@media (min-width: $tablet-l) {
			width: 80%;
		}

		@media (min-width: $laptop-m) {
			width: 60%;
		}
	}

	.button {
		animation-delay: 0.6s;
	}

	img {
		position: absolute;
		bottom: 0;
		right: 15%;
		display: none;
		width: 560px;
		aspect-ratio: 1 / 1;
		animation-delay: 0.8s;

		@media (min-width: $laptop-m) {
			display: block;
		}
	}*/
</style>
