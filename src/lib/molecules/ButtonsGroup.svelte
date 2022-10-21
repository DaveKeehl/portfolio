<script lang="ts">
	import Button from '$atoms/Button.svelte';

	import type { IButton } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let primary: IButton;
	export let secondary: IButton;
	export let size: 'small' | 'large';

	const groupStyles = css({
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: '1rem'
	});
</script>

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

<style lang="scss">
	@import '../../styles/breakpoints.scss';

	div {
		/* display: grid;
		grid-template-columns: 1fr;
		gap: 1rem; */

		@media (min-width: $mobile-xl) {
			grid-template-columns: 1fr 1fr;
		}

		@media (min-width: $tablet) {
			display: flex;
			flex-direction: row;
		}
	}
</style>
