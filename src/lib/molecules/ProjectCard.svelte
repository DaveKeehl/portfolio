<script lang="ts">
	import ButtonsGroup from '$lib/molecules/ButtonsGroup.svelte';
	import type { IButton, IProject } from '$utils/lib';

	export let project: IProject;
	const { title, slug, description, image, technologies, buttons } = project;

	const getPrimaryButton = (buttons: IButton[]): IButton => {
		return buttons.find((button) => button.type === 'Primary');
	};

	const getSecondaryButton = (buttons: IButton[]): IButton => {
		return buttons.find((button) => button.type === 'Primary');
	};
</script>

<div class="project">
	<div class="project__image">
		<img src={image.url} alt={''} />
	</div>
	<div class="project__content">
		<h2>{title}</h2>
		<div class="project__content__technologies">
			{#each technologies as technology}
				<p>{technology}</p>
			{/each}
		</div>
		<p class="project__content__description">{description}</p>
		<ButtonsGroup
			primaryButton={getPrimaryButton(buttons)}
			secondaryButton={getSecondaryButton(buttons)}
			direction="horizontal"
		/>
	</div>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';

	h2 {
		margin-bottom: 1rem;
	}

	.project {
		display: grid;
		grid-template-columns: 4fr 1fr 2fr;
		align-items: center;

		&__image {
			grid-column: 1 / 3;
			grid-row: 1 / 2;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				background: linear-gradient(
					to right,
					transparentize($blue-300, 1),
					transparentize($blue-300, 0.25)
				);
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}

			img {
				width: 100%;
				height: 100%;
				aspect-ratio: 16 / 9;
				object-fit: cover;
			}
		}

		&__content {
			grid-column: 2 / -1;
			grid-row: 1 / 2;
			z-index: 5;

			&__technologies {
				display: flex;
				background: $black-a60;
				backdrop-filter: blur(40px);
				width: fit-content;
				padding: 0.375rem 1rem;
				border-radius: 0.25rem;
				margin-bottom: 2.25rem;

				p:not(:last-child) {
					margin-right: 1rem;
				}
			}

			&__description {
				margin-bottom: 2.25rem;
			}
		}
	}
</style>
