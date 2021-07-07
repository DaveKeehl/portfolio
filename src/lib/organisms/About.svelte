<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import SectionNumber from '$lib/atoms/SectionNumber.svelte';
	import Container from '$lib/templates/Container.svelte';
	import type { IAbout } from '$utils/lib';

	export let about: IAbout;
	const { title, text, button } = about;
</script>

<section class="section gradient-bg" id="about">
	<Container class="section__layout">
		<SectionNumber number={1} />
		<div>
			<h2 class="margin-bottom-small">{title}</h2>
			<p>{text}</p>
			<Button href={button.link} external={button.external}>{button.text}</Button>
		</div>
	</Container>
</section>

<style lang="scss">
	@import '../../styles/colors.scss';

	section {
		padding-top: 8rem;
	}

	p {
		white-space: break-spaces;
		margin-bottom: 3rem;
	}

	div {
		width: 70%;
	}

	.gradient-bg {
		background: linear-gradient(to bottom, $black, transparentize($black, 1));
	}
</style>
