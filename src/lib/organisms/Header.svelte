<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { dev } from '$app/environment';
	import { getPrefix } from '$utils/functions';
	import type { IHeader } from '$utils/lib';
	import { open } from '$stores/menu';
	import Navbar from '$molecules/Navbar.svelte';
	import Container from '$templates/Container.svelte';
	import Socials from '$molecules/Socials.svelte';

	export let header: IHeader;
	const { logo, navigation, socials } = header;

	const prefix: string = getPrefix(dev);

	let visible: boolean = true;
	let y = 0;
	let lastY = 0;

	const checkVisibility = (y: number): boolean => {
		const dy = lastY - y;
		lastY = y;

		const OFFSET = 0;
		const TOLERANCE = 0;

		if (y < OFFSET) return false;
		if (Math.abs(dy) <= TOLERANCE) return visible;
		if (dy < 0) return false;
		return true;
	};

	$: visible = checkVisibility(y);
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

<header class:hidden={!visible}>
	<Container>
		{#if visible}
			<div class="wrapper" transition:fly={{ y: -20, duration: 500 }}>
				<a href={prefix}>
					<img src={logo.url} alt={logo.alt} />
				</a>

				<Navbar {navigation} mobile={false} />

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
								<Navbar {navigation} mobile={true} />
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
		{/if}
	</Container>
</header>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		opacity: 1;
		transition: opacity 0.5s;

		&.hidden {
			opacity: 0;
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 12rem;
			background: linear-gradient(
				to bottom,
				$blue-300,
				transparentize($blue-300, 0.2) 30%,
				transparentize($blue-300, 1)
			);
			z-index: -1;
			pointer-events: none;
		}
	}

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2rem;
		color: $white;
	}

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
