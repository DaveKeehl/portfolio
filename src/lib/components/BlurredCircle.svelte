<script lang="ts">
	import { css } from '$utils/stitches.config';

	const circleStyles = css({
		position: 'absolute',
		bottom: '0',
		left: '50%',
		zIndex: '-1',
		transform: 'translate(-50%, 50%)',
		width: '600px',
		aspectRatio: '1/1',
		background: '$blue-100',
		filter: 'blur(180px)',
		opacity: '0.25',
		borderRadius: '100%'
	});
</script>

<div class={circleStyles()} />
