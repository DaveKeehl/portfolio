<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import Container from '$lib/templates/Container.svelte';

	import type { IHero } from '$utils/lib';

	export let hero: IHero;
	const { greetings, valueProposition, introduction, button } = hero;
</script>

<section>
	<Container>
		<p class="greetings p2--medium">{greetings}</p>
		<h1 class="h1--bold">{valueProposition}</h1>
		<p class="introduction p3--regular">{introduction}</p>
		<Button href={button.link} external={button.external}>{button}</Button>
	</Container>
</section>

<style lang="scss">
	@import '../../styles/colors.scss';

	section {
		padding-top: 15rem;
		padding-bottom: 20rem;
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
	}
</style>
