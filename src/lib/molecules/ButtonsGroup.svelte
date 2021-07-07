<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import type { IButton } from '$utils/lib';

	type Direction = 'horizontal' | 'vertical';

	export let direction: Direction = 'horizontal';
	export let primaryButton: IButton;
	export let secondaryButton: IButton;
</script>

<div class={direction}>
	<Button variant="primary" href={primaryButton.link} external={primaryButton.external}>
		{primaryButton.text}
	</Button>
	<Button variant="secondary" href={secondaryButton.link} external={secondaryButton.external}>
		{secondaryButton.text}
	</Button>
</div>

<style lang="scss">
	@import '../../styles/breakpoints.scss';

	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		&.horizontal {
			flex-direction: column;

			@media (min-width: $sizes-sm) {
				flex-direction: row;
			}
		}

		&.vertical {
			flex-direction: column;
		}

		/* @media (sizes-xs) {
			flex-direction: row;
		} */
	}
</style>
