<script lang="ts">
	import SanityImage from '$components/SanityImage.svelte';

	import type { IImage } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let maxWidth: number;
	export let image: IImage;

	const contentSectionStyles = css({
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		background:
			'linear-gradient(to bottom, $grayscale-300 150px, $blue-400 550px)'
	});

	const contentContainerStyles = css({
		width: '80%',
		maxWidth: `${maxWidth}px`
	});

	const imageStyles = css({
		position: 'absolute',
		top: '0',
		left: '50%',
		transform: 'translateX(-50%) translateY(-50%)',
		width: '80%',
		maxWidth: '700px',
		borderRadius: '20px',
		border: '1px solid $turquoise-200-A05',
		aspectRatio: '16 / 9',
		objectFit: 'cover'
	});

	const contentStyles = css({
		marginBlock: '180px 104px',

		'@xs': {
			marginBlock: '200px 104px'
		},

		'@sm': {
			marginBlock: '240px 104px'
		},

		'@md': {
			marginBlock: '320px 104px'
		}
	});
</script>

<div class={contentSectionStyles()}>
	<div class={contentContainerStyles()}>
		<SanityImage src={image.url} alt="" class={imageStyles()} />
		<div class={contentStyles()}>
			<slot />
		</div>
	</div>
</div>
