<script lang="ts">
	import { fly } from 'svelte/transition';
	import { dev } from '$app/env';
	import { getPrefix } from '$utils/functions';
	import Navbar from '$lib/molecules/Navbar.svelte';
	import Container from '$lib/templates/Container.svelte';
	import { open } from '$stores/menu';
	import type { IHeader } from '$utils/lib';

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

	$: console.log($open);
</script>

<svelte:window bind:scrollY={y} />

<header class:hidden={!visible}>
	<Container>
		{#if visible}
			<div class="wrapper" transition:fly={{ y: -20, duration: 500 }}>
				<a href={prefix}>
					<img src={logo.url} alt={logo.alt} />
				</a>

				<Navbar {navigation} mobile={false} />

				<div class="socials">
					{#each socials as social}
						<a href={social.url} target="_blank" rel="noopener noreferrer">
							<img src={social.image.url} alt={social.image.alt} />
						</a>
					{/each}
				</div>

				<div class="mobile">
					<img
						src="/menu.svg"
						alt="Burger menu icon to toggle mobile menu visibility"
						class="menu-toggle"
						on:click={() => open.update((prev) => !prev)}
					/>
					<Navbar {navigation} mobile={true} />
					<div class="bg" class:visible={$open} on:click={() => open.set(false)} />
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

	.socials {
		display: flex;
		gap: 1rem;
	}

	.socials {
		display: none;

		@media (min-width: $tablet) {
			display: flex;
		}

		a {
			transition: opacity 0.2s;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	.mobile {
		display: block;

		@media (min-width: $tablet) {
			display: none;
		}

		img {
			&:hover {
				cursor: pointer;
			}
		}

		.bg {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: tomato;
			display: none;

			&.visible {
				display: block;
			}
		}
	}
</style>
