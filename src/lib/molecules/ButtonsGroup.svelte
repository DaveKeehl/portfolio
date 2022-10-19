<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import type { IButton } from '$utils/lib';

	export let primary: IButton;
	export let secondary: IButton;
</script>

<div>
	<Button variant="primary" href={primary.href} external={primary.external}>
		{primary.text}
	</Button>
	<Button
		variant="secondary"
		href={secondary.href}
		external={secondary.external}
	>
		{secondary.text}
	</Button>
</div>

<style lang="scss">
	@import '../../styles/breakpoints.scss';

	div {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		@media (min-width: $mobile-xl) {
			grid-template-columns: 1fr 1fr;
		}

		@media (min-width: $tablet) {
			display: flex;
			flex-direction: row;
		}
	}
</style>
