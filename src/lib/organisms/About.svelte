<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import Section from '$lib/templates/Section.svelte';
	import type { IAbout } from '$utils/lib';

	export let about: IAbout;
	const { title, text, button } = about;
</script>

<Section number={1} id="about" isAbout={true}>
	<div>
		<h2 class="h2--bold margin-bottom-small">{title}</h2>
		<p class="p4--regular">{text}</p>
		<Button href={button.link} external={button.external}>{button.text}</Button>
	</div>
</Section>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	p {
		white-space: break-spaces;
		margin-bottom: 3rem;
	}

	div {
		@media (min-width: $sizes-md) {
			width: 80%;
		}

		@media (min-width: $sizes-lg) {
			width: 70%;
		}
	}
</style>
