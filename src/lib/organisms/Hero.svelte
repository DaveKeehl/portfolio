<script lang="ts">
	import { dev } from '$app/env';
	import Button from '$lib/atoms/Button.svelte';
	import Container from '$lib/templates/Container.svelte';
	import { getPrefix } from '$utils/functions';
	import { revealOnScroll } from '$actions/revealOnScroll';
	import type { IHero } from '$utils/lib';

	export let hero: IHero;
	const { greetings, valueProposition, introduction, button, image } = hero;

	const prefix: string = getPrefix(dev);
</script>

<section>
	<Container>
		<p class="greetings p2--medium reveal">{greetings}</p>
		<h1 class="h1--bold reveal">{valueProposition}</h1>
		<p class="introduction p3--regular reveal">{introduction}</p>
		<div class="button" use:revealOnScroll={{ debug: true, ref: 'hero-button' }}>
			<Button href={`${prefix}#projects`} external={button.external}>
				{button.text}
			</Button>
		</div>
	</Container>
	<img src={image.url} alt={image.alt} class="reveal" />
</section>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	section {
		padding-top: 10rem;
		padding-bottom: 14rem;
		position: relative;

		@media (min-width: $tablet) {
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
