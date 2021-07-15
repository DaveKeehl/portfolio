<script lang="ts">
	import { dev } from '$app/env';
	import Button from '$lib/atoms/Button.svelte';
	import Container from '$lib/templates/Container.svelte';
	import { getPrefix } from '$utils/functions';
	import { reveal } from '$actions/revealOnScroll';
	import type { IHero } from '$utils/lib';
	import ButtonsGroup from '$lib/molecules/ButtonsGroup.svelte';

	export let hero: IHero;
	const { greetings, valueProposition, introduction, button, image } = hero;

	const prefix: string = getPrefix(dev);
</script>

<section>
	<Container>
		<p class="greetings p2--medium" use:reveal>{greetings}</p>
		<h1 class="h1--bold" use:reveal={{ delay: 100 }}>{valueProposition}</h1>
		<p class="introduction p3--regular" use:reveal={{ delay: 200 }}>{introduction}</p>
		<div class="button" use:reveal={{ delay: 300 }}>
			<ButtonsGroup
				direction="horizontal"
				primaryButton={{ text: button.text, link: `${prefix}#projects`, external: button.external }}
				secondaryButton={{
					text: 'Get in touch with me',
					link: `${prefix}#contact`,
					external: false
				}}
			/>
			<!-- <Button href={`${prefix}#projects`} external={button.external}>
				{button.text}
			</Button> -->
		</div>
	</Container>
	<img src={image.url} alt={image.alt} use:reveal={{ delay: 400 }} />
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
