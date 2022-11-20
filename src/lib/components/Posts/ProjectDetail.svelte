<script lang="ts">
	import { css } from '$utils/stitches.config';

	export let title: string;

	const detailsPartStyles = css({
		'& > *:first-child': {
			p4: 'medium',
			color: '$blue-100',
			opacity: '0.6',
			marginBottom: '2px'
		},

		'& > *:last-child': {
			p4: 'semiBold',
			color: '$grayscale-100',
			whiteSpace: 'pre-wrap'
		}
	});
</script>

<div class={detailsPartStyles()}>
	<p>{title}</p>
	<p>
		<slot />
	</p>
</div>
