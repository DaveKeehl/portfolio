<script lang="ts">
	import { dev } from '$app/env';
	import Button from '$lib/atoms/Button.svelte';
	import Container from '$lib/templates/Container.svelte';
	import { getPrefix } from '$utils/functions';

	import type { IHero } from '$utils/lib';

	export let hero: IHero;
	const { greetings, valueProposition, introduction, button, image } = hero;

	const prefix: string = getPrefix(dev);
</script>

<section>
	<Container>
		<p class="greetings p2--medium">{greetings}</p>
		<h1 class="h1--bold">{valueProposition}</h1>
		<p class="introduction p3--regular">{introduction}</p>
		<Button href={`${prefix}#projects`} external={button.external}>
			{button.text}
		</Button>
	</Container>
	<img src={image.url} alt={image.alt} />
</section>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	section {
		padding-top: 12rem;
		padding-bottom: 18rem;
		position: relative;
	}

	h1 {
		margin-top: 0.875rem;
		margin-bottom: 2.5rem;
	}

	.greetings {
		color: $turquoise-200;
	}

	.introduction {
		margin-bottom: 3.5rem;
		width: 100%;

		@media (min-width: $sizes-md) {
			width: 80%;
		}

		@media (min-width: $sizes-lg) {
			width: 60%;
		}
	}

	img {
		position: absolute;
		bottom: 0;
		right: 15%;
		display: none;

		@media (min-width: $sizes-lg) {
			display: block;
		}
	}
</style>
