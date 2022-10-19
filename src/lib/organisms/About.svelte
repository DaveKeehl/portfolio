<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import type { IAbout } from '$utils/lib';
	import { getPrefix } from '$utils/functions';

	import Section from '$templates/Section.svelte';
	import Button from '$atoms/Button.svelte';

	export let about: IAbout;
	const { heading, content, image, button } = about;
</script>

<Section number={1} id="about" isAbout={true}>
	<div>
		<h2 class="h2--bold margin-bottom-small" use:reveal={{ delay: 200 }}>
			{heading}
		</h2>
		<p class="p4--regular" use:reveal>{content}</p>
		<div use:reveal={{ marginBottom: 50 }}>
			<Button href={`${getPrefix()}/cv.pdf`} external>{button}</Button>
		</div>
	</div>
	<img src={image} alt="" />
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
