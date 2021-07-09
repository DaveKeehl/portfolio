<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { dev } from '$app/env';
	import { getPrefix } from '$utils/functions';
	import Container from '$lib/templates/Container.svelte';
	import type { IHeader } from '$utils/lib';

	export let header: IHeader;
	const { logo, navigation, socials } = header;

	const prefix: string = getPrefix(dev);

	let offset = 0;
	let tolerance = 0;

	let visible: boolean = true;
	let y = 0;
	let lastY = 0;

	const checkVisibility = (y: number): boolean => {
		const dy = lastY - y;
		lastY = y;

		if (y < offset) return false;
		if (Math.abs(dy) <= tolerance) return visible;
		if (dy < 0) return false;
		return true;
	};

	$: visible = checkVisibility(y);
	$: console.log(visible);
</script>

<svelte:window bind:scrollY={y} />

<header class={!visible ? 'hidden' : ''}>
	<Container>
		{#if visible}
			<div class="wrapper" transition:fly={{ y: -20, duration: 500 }}>
				<a href={prefix}>
					<img src={logo.url} alt={logo.alt} />
				</a>

				<nav>
					{#each navigation as item}
						<a href={`${prefix}#${item}`} class="p5--medium">{item.toUpperCase()}</a>
					{/each}
				</nav>

				<div class="socials">
					{#each socials as social}
						<a href={social.url} target="_blank" rel="noopener noreferrer">
							<img src={social.image.url} alt={social.image.alt} />
						</a>
					{/each}
				</div>

				<img
					src="/menu.svg"
					alt="Burger menu icon to toggle mobile menu visibility"
					class="menu-toggle"
				/>
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
		background: linear-gradient(
			to bottom,
			$blue-300,
			transparentize($blue-300, 0.2) 30%,
			transparentize($blue-300, 1)
		);
		opacity: 1;
		transition: opacity 0.5s;

		&.hidden {
			opacity: 0;
		}
	}

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 0 8rem;
		color: $white;
	}

	nav a {
		color: $white;

		&:not(:last-child) {
			margin-right: 1.5rem;
		}
	}

	.socials {
		display: flex;
		gap: 1rem;
	}

	nav,
	.socials {
		display: none;

		@media (min-width: $sizes-sm) {
			display: flex;
		}

		a {
			transition: opacity 0.2s;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	.menu-toggle {
		display: block;

		@media (min-width: $sizes-sm) {
			display: none;
		}

		&:hover {
			cursor: pointer;
		}
	}
</style>
