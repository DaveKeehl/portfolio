<script lang="ts">
	import { css } from '$utils/stitches.config';

	let className = '';
	export { className as class };

	const dividerStyles = css({
		display: 'block',
		width: '100%',
		height: '1px',
		background: '$blue-100',
		opacity: '0.1'
	});
</script>

<div class={`${dividerStyles()} ${className}`} />
