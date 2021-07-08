<script lang="ts">
	import ButtonsGroup from '$lib/molecules/ButtonsGroup.svelte';
	import type { IButton, IProject } from '$utils/lib';
	import { mapping } from '$utils/technologies';

	export let project: IProject;
	const { title, slug, description, image, technologies, buttons } = project;

	export let reversed: boolean = false;

	const getPrimaryButton = (buttons: IButton[]): IButton => {
		return buttons.find((button) => button.type === 'Primary');
	};

	const getSecondaryButton = (buttons: IButton[]): IButton => {
		return buttons.find((button) => button.type === 'Secondary');
	};
</script>

<div class={`project ${reversed ? 'reversed' : ''}`}>
	<div class="image">
		<img src={image.url} alt={''} />
	</div>
	<div class="content">
		<a href={`https://davideciulla.com/projects/${slug}`}>
			<h2>{title}</h2>
		</a>
		<div class="technologies">
			{#each technologies as technology}
				<p>{mapping[technology]}</p>
			{/each}
		</div>
		<p class="description p5--regular">{description}</p>
		<ButtonsGroup
			primaryButton={getPrimaryButton(buttons)}
			secondaryButton={{
				text: getSecondaryButton(buttons).text,
				link: `https://davideciulla.com/blog/${slug}`,
				external: false
			}}
			direction="horizontal"
		/>
	</div>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	h2 {
		transform: translateY(-50%);
		color: $white;

		@media (min-width: $sizes-md) {
			transform: none;
			margin-bottom: 1rem;
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
		display: flex;
		background: $black-a60;
		backdrop-filter: blur(40px);
		width: fit-content;
		padding: 0.375rem 1rem;
		border-radius: 0.25rem;
		margin-bottom: 2.25rem;
		font-size: 0.875rem;

		p:not(:last-child) {
			margin-right: 1rem;
		}
	}

	.description {
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
