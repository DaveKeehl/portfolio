<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import type { IAbout } from '$utils/lib';

	import Section from '$templates/Section.svelte';
	import Button from '$atoms/Button.svelte';
	import { css, theme } from '$utils/stitches.config';

	export let about: IAbout;
	const { heading, content, image, button } = about;

	const sectionStyles = css({
		paddingBlock: '128px 72px',
		background: `linear-gradient(
			to bottom,
			$grayscale-300 0%,
			$grayscale-300 30%,
			transparent
		)`
	});

	const contentStyles = css({
		display: 'flex'
	});
</script>

<Section
	{heading}
	icon="HandWaving"
	headingGap="small"
	id="about"
	class={sectionStyles()}
>
	<div class={contentStyles()}>
		<div>
			<p class="p4--regular" use:reveal>{content}</p>
			<div use:reveal={{ marginBottom: 50 }}>
				<Button href="cv.pdf" external>{button}</Button>
			</div>
		</div>
		<img src={image} alt="" />
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

	img {
		width: 500px;
	}
</style>
