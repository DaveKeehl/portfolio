<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import Navbar from '$molecules/Navbar.svelte';
	import Container from '$templates/Container.svelte';
	import Socials from '$molecules/Socials.svelte';

	import { open } from '$stores/menu';
	import { getHostname } from '$utils/functions';
	import type { IHeader } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let header: IHeader;
	const { logo, sections, socials } = header;

	let isVisible = true;
	let y = 0;
	let lastY = 0;

	function checkVisibility(y: number): boolean {
		const TOLERANCE = 0;
		const dy = lastY - y;
		lastY = y;

		if (Math.abs(dy) <= TOLERANCE) return isVisible; // if delta-y doesn't go over the tolerance, persist the existing visibility state
		return dy > TOLERANCE;
	}

	$: isVisible = checkVisibility(y);

	const headerStyles = css({
		position: 'sticky',
		top: '0',
		left: '0',
		width: '100%',
		zIndex: '10',
		opacity: '1',
		backdropFilter: 'blur(10px)',
		transform: 'translateY(0)',
		transition: 'all 0.3s',
		pointerEvents: 'all',

		'&.hidden': {
			opacity: '0',
			transform: 'translateY(-20px)',
			pointerEvents: 'none'
		},

		'&::before': {
			content: '',
			position: 'absolute',
			bottom: '0',
			width: '100%',
			height: '1px',
			background:
				'linear-gradient(to right, transparent, $blue-200-A25, transparent)'
		},

		'&::after': {
			content: '',
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			background: '$blue-400',
			zIndex: '-1',
			pointerEvents: 'none',
			opacity: '0.7'
		}
	});

	const topHeaderStyles = css({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBlock: '1rem',
		color: '$grayscale-100',
		width: '100%'
	});

	const mainNavigationStyles = css({
		display: 'none',

		'@lg': {
			display: 'flex'
		}
	});

	const logoStyles = css({
		display: 'flex',
		flex: 'none',
		justifyContent: 'flex-start',

		'@lg': {
			flex: '1'
		}
	});

	const socialStyles = css({
		display: 'flex',
		flex: 'none',
		justifyContent: 'flex-end',

		'@lg': {
			flex: '1'
		}
	});

	const mobileNavigation = css({
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		overflow: 'hidden',

		'@lg': {
			display: 'none'
		},

		'&::before': {
			content: '',
			position: 'absolute',
			top: '0',
			width: '100%',
			height: '1px',
			background:
				'linear-gradient(to right, transparent, $blue-200-A25, transparent)'
		},

		// '&::after': {
		// 	content: '',
		// 	position: 'absolute',
		// 	top: '0',
		// 	left: '50%',
		// 	transform: 'translateX(-50%)',
		// 	width: '100%',
		// 	height: '100%',
		// 	// background:
		// 	// 	'linear-gradient(to right, $blue-400 8%, transparent 20%, transparent 80%, $blue-400 92%)',
		// 	zIndex: '10',
		// 	pointerEvents: 'none'
		// },

		'& > nav': {
			width: '80%',
			paddingBlock: '16px',
			overflow: 'scroll',

			'@sm': {
				justifyContent: 'center'
			}
		}
	});
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	{#if $open}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<header class:hidden={!isVisible} class={headerStyles()}>
	<Container>
		<div class={topHeaderStyles()}>
			<a href={getHostname()} class={logoStyles()}>
				<img src={logo} alt="Logo" />
			</a>
			<div class={mainNavigationStyles()}>
				<Navbar {sections} mobile={false} />
			</div>
			<div class={socialStyles()}>
				<Socials {socials} mobile={false} />
			</div>
		</div>
	</Container>
	<div class={mobileNavigation()}>
		<Navbar {sections} mobile={false} />
	</div>
</header>
