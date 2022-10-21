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
		transform: 'translateY(0)',
		transition: 'all 0.3s',

		'&.hidden': {
			opacity: '0',
			transform: 'translateY(-20px)'
		},

		'&::after': {
			content: '',
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			height: '12rem',
			background: `linear-gradient(
				to bottom,
				$blue-400,
				$blue-400-A80 30%,
				transparent
			)`,
			zIndex: '-1',
			pointerEvents: 'none'
		}
	});

	const wrapperStyles = css({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: '2rem',
		color: '$grayscale-100'
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
		<div class={wrapperStyles()} transition:fly={{ y: -20, duration: 500 }}>
			<a href={getHostname()}>
				<img src={logo} alt="" />
			</a>

			<Navbar {sections} mobile={false} />

			<Socials {socials} mobile={false} />

			<div class="mobile">
				<img
					src="/icons/menu.svg"
					alt="Burger menu icon to toggle mobile menu visibility"
					class="menu-toggle"
					on:click={() => open.set(true)}
				/>
				{#if $open}
					<div class="menu" transition:fly={{ x: 200 }}>
						<img
							src="/icons/close.svg"
							alt="Close mobile icon"
							on:click={() => open.set(false)}
						/>
						<div>
							<Navbar {sections} mobile={true} />
							<Socials {socials} mobile={true} />
						</div>
					</div>
					<div
						class="bg"
						on:click={() => open.set(false)}
						transition:fade={{ duration: 300, easing: cubicInOut }}
					/>
				{/if}
			</div>
		</div>
	</Container>
</header>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	.mobile {
		display: block;

		@media (min-width: $tablet-l) {
			display: none;
		}

		img {
			&:hover {
				cursor: pointer;
			}
		}

		.menu {
			position: fixed;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			gap: 2rem;
			top: 0;
			right: 0;
			z-index: 20;
			background: $white;
			height: 100vh;
			width: 70vw;
			padding: 1.5rem 2rem;

			img {
				width: 3rem;
				transform: translate3d(-10px, -10px, 0);
			}

			div {
				display: flex;
				flex-direction: column;
				gap: 2rem;
				width: 100%;
			}
		}

		.bg {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: $black-a60;

			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
