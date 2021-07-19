<script lang="ts">
	import Container from '$templates/Container.svelte';
	import type { IImage } from '$utils/lib';
	import { reveal } from '$actions/revealOnScroll';

	export let title: string;
	export let category: string;
	export let cover: IImage;
</script>

<h1 class="h1--bold title" use:reveal>{title}</h1>
<h3 class="h3--semibold" use:reveal={{ delay: 200 }}>{category}</h3>

<div class="image">
	<Container>
		<div use:reveal={{ delay: 400 }}>
			<img src={cover.url} alt={cover.alt} />
		</div>
	</Container>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	.title {
		margin-top: 14rem;
		text-align: center;
	}

	h3 {
		color: $blue-100;
		margin: 1rem 0 4.5rem 0;
	}

	.image {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100vw;
		margin-bottom: 7.5rem;

		@media (min-width: $tablet-l) {
			margin-bottom: 10rem;
		}

		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			height: 50rem;
			width: 100%;
			background: linear-gradient(to bottom, $black, transparentize($black, 1));
			z-index: -1;
		}

		img {
			width: clamp(60%, 500px, 100%);
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			aspect-ratio: 16 / 10;
			box-shadow: 0 0 7rem 0.625rem $turquoise-100-a10;
		}
	}
</style>
