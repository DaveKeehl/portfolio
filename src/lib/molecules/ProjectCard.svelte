<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import ButtonsGroup from '$molecules/ButtonsGroup.svelte';
	import Label from '$atoms/Label.svelte';

	import type { IProject } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let project: IProject;
	export let reversed = false;

	const { title, image, primaryCTA, excerpt, type } = project;
	$: slug = title.toLowerCase().replace(/\s/g, '-');

	const titleStyles = css({
		h3: 'bold',
		marginBlock: '20px 16px'
	});

	const excerptStyles = css({
		p5: 'regular',
		opacity: '0.9',
		color: '$blue-100',
		marginBottom: '36px'
	});

	const imageStyles = css({
		display: 'flex',
		gridColumn: '1 / 5',
		gridRow: '1 / 3',
		position: 'relative',

		'& img': {
			position: 'relative',
			width: '100%',
			height: '100%',
			aspectRatio: '16 / 10',
			objectFit: 'cover',
			borderRadius: '20px',
			border: '1px solid $turquoise-200-A05',

			'&::before': {
				content: '',
				position: 'absolute',
				background: 'linear-gradient(to bottom, transparent, $blue-300-A75)',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
				zIndex: '5'
			}
		}
	});
</script>

<div class:reversed class="project" use:reveal>
	<div class={`${imageStyles()} image`}>
		<img src={image} alt={title} />
	</div>

	<div class="content">
		<Label>{type}</Label>

		<a href={`/project/${slug}`}>
			<h3 class={titleStyles()}>{title}</h3>
		</a>

		<p class={excerptStyles()}>{excerpt}</p>

		<ButtonsGroup
			size="small"
			primary={{
				text: primaryCTA.text,
				href: primaryCTA.url,
				external: true
			}}
			secondary={{
				text: 'Go to case study',
				href: `project/${slug}`,
				external: false
			}}
		/>
	</div>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	/* a {
		display: block;
		width: fit-content;

		h2 {
			transform: translateY(-50%);
			color: $white;

			@media (min-width: $tablet-l) {
				transform: none;
				margin-bottom: 1rem;
			}
		}
	} */

	.project {
		display: block;

		@media (min-width: $tablet-l) {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: 1fr;
			align-items: center;
		}
	}

	.image {
		/* display: flex;
		grid-column: 1 / 5;
		grid-row: 1 / 3;
		position: relative; */

		@media (min-width: $tablet-l) {
			grid-row: 1 / 2;
		}

		&::before {
			/* content: '';
			position: absolute;
			background: linear-gradient(
				to bottom,
				transparentize($blue-300, 1),
				transparentize($blue-300, 0.25)
			);
			top: 0;
			left: 0;
			width: 100%;
			height: 100%; */

			@media (min-width: $tablet-l) {
				background: linear-gradient(
					to right,
					transparentize($blue-300, 1),
					transparentize($blue-300, 0.25)
				);
			}
		}

		img {
			/* width: 100%;
			height: 100%;
			aspect-ratio: 16 / 10;
			object-fit: cover; */

			@media (min-width: $tablet-l) {
				aspect-ratio: 16 / 12;
			}

			@media (min-width: $laptop-m) {
				aspect-ratio: 16 / 10;
			}
		}
	}

	.content {
		z-index: 5;

		@media (min-width: $tablet-l) {
			grid-row: 1 / 2;
			grid-column: 3 / -1;
		}

		@media (min-width: $laptop-m) {
			grid-column: 4 / -1;
		}
	}

	.reversed {
		.image {
			grid-column: 3 / -1;

			&::before {
				@media (min-width: $tablet-l) {
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

			@media (min-width: $laptop-m) {
				grid-column: 1 / 4;
			}
		}
	}
</style>
