<script lang="ts">
	import ButtonsGroup from '$molecules/ButtonsGroup.svelte';
	import Container from '$templates/Container.svelte';
	import { reveal } from 'svelte-reveal';
	import { getPrefix } from '$utils/functions';
	import type { IHero } from '$utils/lib';
	import Button from '$atoms/Button.svelte';

	export let hero: IHero;
	const { heading, greetings, buttons, description } = hero;
</script>

<section>
	<Container>
		<p class="greetings p2--medium" use:reveal>{greetings}</p>
		<h1 class="h1--bold" use:reveal={{ delay: 100 }}>{heading}</h1>
		<p class="introduction p3--regular" use:reveal={{ delay: 200 }}>
			{description}
		</p>
		<div class="button" use:reveal={{ delay: 300 }}>
			<ButtonsGroup
				primary={{
					text: buttons.primary,
					href: `${getPrefix()}#projects`,
					external: false
				}}
				secondary={{
					text: buttons.secondary,
					href: `${getPrefix()}#contact`,
					external: false
				}}
			/>
		</div>
	</Container>
</section>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	section {
		padding-top: 14rem;
		padding-bottom: 12rem;
		position: relative;

		@media (min-width: $tablet-l) {
			padding-top: 20rem;
			padding-bottom: 18rem;
		}
	}

	.greetings {
		color: $turquoise-200;
	}

	h1 {
		margin-top: 0.875rem;
		margin-bottom: 2.5rem;
		animation-delay: 0.2s;
	}

	.introduction {
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
	}
</style>
