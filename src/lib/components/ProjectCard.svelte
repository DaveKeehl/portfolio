<script lang="ts">
	import ButtonsGroup from '$lib/components/ButtonsGroup.svelte';
	import Label from '$lib/components/Label.svelte';
	import SanityImage from './SanityImage.svelte';

	import type { IProject } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let project: IProject;
	export let reversed = false;

	const { title, slug, image, liveButton, excerpt, type } = project;

	const projectCardStyles = css({
		display: 'flex',
		flexDirection: 'column',

		'@lg': {
			display: 'grid',
			gridTemplateColumns: 'repeat(10, 1fr)',
			gridTemplateRows: '1fr',
			alignItems: 'center'
		}
	});

	const titleStyles = css({
		display: 'block',
		width: 'fit-content',

		'& h3': {
			h3: 'bold',
			marginBlock: '20px 16px'
		}
	});

	const excerptStyles = css({
		p5: 'regular',
		opacity: '0.9',
		color: '$blue-100',
		marginBottom: '36px'
	});

	const imageContainerStyles = css({
		display: 'flex',
		gridColumn: '5 / -1',
		gridRow: '1 / 2',
		position: 'relative',
		borderRadius: '20px',
		overflow: 'hidden',
		border: '1px solid $turquoise-200-A05',
		marginBottom: '20px',

		'@lg': {
			marginBottom: '0'
		},

		'&::before': {
			content: '',
			display: 'none',
			position: 'absolute',
			background:
				'linear-gradient(90deg, rgba(2, 19, 38, 0.9) 10.94%, rgba(2, 21, 43, 0.1) 100%)',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			zIndex: '5',
			pointerEvents: 'none',

			'@lg': {
				display: 'block'
			}
		},

		variants: {
			reversed: {
				true: {
					gridColumn: '1 / 7',

					'&::before': {
						background:
							'linear-gradient(90deg, rgba(2, 21, 43, 0.1) 0%, #021326 89.06%)'
					}
				}
			}
		}
	});

	const imageStyles = css({
		width: '100%',
		height: '100%',
		aspectRatio: '16 / 10',
		objectFit: 'cover',
		transition: 'transform 0.3s',

		'&:hover': {
			transform: 'scale(1.02)'
		}
	});

	const contentStyles = css({
		zIndex: '5',
		gridColumn: '1 / 6',
		gridRow: '1 / 2',

		variants: {
			reversed: {
				true: {
					gridColumn: '6 / -1'
				}
			}
		}
	});
</script>

<div class={projectCardStyles({ reversed })}>
	<div class={imageContainerStyles({ reversed })}>
		<SanityImage
			src={image.url}
			alt={title}
			class={imageStyles({ reversed })}
			loading="lazy"
		/>
	</div>

	<div class={contentStyles({ reversed })}>
		<Label>{type}</Label>

		<a href={`/project/${slug}`} class={titleStyles({ reversed })}>
			<h3>{title}</h3>
		</a>

		<p class={excerptStyles({ reversed })}>{excerpt}</p>

		<ButtonsGroup
			size="small"
			primary={{
				text: liveButton.text,
				href: liveButton.url,
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
