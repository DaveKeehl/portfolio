<script lang="ts">
	import { css } from '$utils/stitches.config';

	let className: string = '';
	export { className as class };

	const containerStyles = css({
		width: '80%',
		maxWidth: '1120px',
		margin: '0 auto'
	});
</script>

<div class={`${className} ${containerStyles()}`}>
	<slot />
</div>
