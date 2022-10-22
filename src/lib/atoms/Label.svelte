<script lang="ts">
	import { css } from '$utils/stitches.config';

	const styles = css({
		p6: 'code',
		borderRadius: '2px',
		background: '$turquoise-100-A10',
		width: 'fit-content',
		padding: '4px 10px',
		textTransform: 'uppercase',
		color: '$blue-100',
		backdropFilter: 'blur(4px)'
	});
</script>

<div class={styles()}>
	<slot />
</div>
