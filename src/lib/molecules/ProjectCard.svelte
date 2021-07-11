<script lang="ts">
	import { dev } from '$app/env';
	import { getPrefix } from '$utils/functions';
	import { mapping } from '$utils/technologies';
	import ButtonsGroup from '$lib/molecules/ButtonsGroup.svelte';
	import type { IProject } from '$utils/lib';

	export let project: IProject;
	const { title, slug, liveUrl, visitButtonText, excerpt, cover, technologies } = project;

	export let reversed: boolean = false;

	const prefix: string = getPrefix(dev);
</script>

<div class:reversed class="project">
	<div class="image">
		<img src={cover.url} alt={cover.alt} />
	</div>
	<div class="content">
		<a href={`${prefix}/projects/${slug}`}>
			<h2>{title}</h2>
		</a>
		<div class="technologies">
			<p>></p>
			<div>
				{#each technologies as technology}
					<p>{mapping[technology]}</p>
				{/each}
			</div>
		</div>
		<p class="excerpt p5--regular">{excerpt}</p>
		<ButtonsGroup
			primaryButton={{
				text: visitButtonText,
				link: liveUrl,
				external: true
			}}
			secondaryButton={{
				text: 'Go to case study',
				link: `${prefix}/project/${slug}`,
				external: false
			}}
			direction="horizontal"
		/>
	</div>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	a {
		display: block;
		width: fit-content;

		h2 {
			transform: translateY(-50%);
			color: $white;

			@media (min-width: $sizes-md) {
				transform: none;
				margin-bottom: 1rem;
			}
		}
	}

	.project {
		display: block;

		@media (min-width: $sizes-md) {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: 1fr;
			align-items: center;
		}
	}

	.image {
		display: flex;
		grid-column: 1 / 5;
		grid-row: 1 / 3;
		position: relative;

		@media (min-width: $sizes-md) {
			grid-row: 1 / 2;
		}

		&::before {
			content: '';
			position: absolute;
			background: linear-gradient(
				to bottom,
				transparentize($blue-300, 1),
				transparentize($blue-300, 0.25)
			);
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			@media (min-width: $sizes-md) {
				background: linear-gradient(
					to right,
					transparentize($blue-300, 1),
					transparentize($blue-300, 0.25)
				);
			}
		}

		img {
			width: 100%;
			height: 100%;
			aspect-ratio: 16 / 10;
			object-fit: cover;

			@media (min-width: $sizes-md) {
				aspect-ratio: 16 / 12;
			}

			@media (min-width: $sizes-lg) {
				aspect-ratio: 16 / 10;
			}
		}
	}

	.content {
		z-index: 5;

		@media (min-width: $sizes-md) {
			grid-row: 1 / 2;
			grid-column: 3 / -1;
		}

		@media (min-width: $sizes-lg) {
			grid-column: 4 / -1;
		}
	}

	.technologies {
		display: grid;
		grid-template-columns: 1fr auto;
		/* gap: 0.875rem; */
		/* gap: 1rem; */
		background: $black-a60;
		backdrop-filter: blur(40px);
		width: fit-content;
		padding: 0.375rem 1rem;
		border-radius: 0.25rem;
		margin-bottom: 2.25rem;

		div {
			display: flex;
			flex-wrap: wrap;
		}

		p {
			font-family: 'Fira Code', monospace;
			font-size: 0.875rem;
			letter-spacing: 2%;
			line-height: 1.5rem;

			&:not(:last-child) {
				margin-right: 1rem;
			}
		}
	}

	.excerpt {
		margin-bottom: 2.25rem;
	}

	.reversed {
		.image {
			grid-column: 3 / -1;

			&::before {
				@media (min-width: $sizes-md) {
					background: linear-gradient(
						to left,
						transparentize($blue-300, 1),
						transparentize($blue-300, 0.25)
					);
				}
			}
		}

		.content {
			grid-column: 1 / 5;

			@media (min-width: $sizes-lg) {
				grid-column: 1 / 4;
			}
		}
	}
</style>
