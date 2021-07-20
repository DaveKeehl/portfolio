<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import Section from '$templates/Section.svelte';
	import { reveal } from '$actions/reveal';
	import type { IAbout } from '$utils/lib';

	export let about: IAbout;
	const { title, text, button } = about;
</script>

<Section number={1} id="about" isAbout={true}>
	<div>
		<h2 class="h2--bold margin-bottom-small" use:reveal={{ delay: 200 }}>
			{title}
		</h2>
		<p class="p4--regular" use:reveal>{text}</p>
		<div use:reveal={{ offset: 50 }}>
			<Button href={button.link} external={button.external}>{button.text}</Button>
		</div>
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
		@media (min-width: $tablet-l) {
			width: 80%;
		}

		@media (min-width: $laptop-m) {
			width: 70%;
		}
	}
</style>
