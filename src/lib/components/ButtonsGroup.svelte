<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import type { IButton } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let primary: IButton;
	export let secondary: IButton;
	export let size: 'small' | 'large';

	const groupStyles = css({
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: '1rem',

		'@md': {
			display: 'flex'
		}
	});
</script>

<div class="button-group">
	<div class={groupStyles()}>
		<Button
			variant="primary"
			{size}
			href={primary.href}
			external={primary.external}
		>
			{primary.text}
		</Button>
		<Button
			variant="secondary"
			{size}
			href={secondary.href}
			external={secondary.external}
		>
			{secondary.text}
		</Button>
	</div>
</div>
