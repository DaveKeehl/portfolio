<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import type { IButton } from '$utils/lib';

	type Direction = 'horizontal' | 'vertical';

	export let direction: Direction = 'horizontal';
	export let primaryButton: IButton;
	export let secondaryButton: IButton;
</script>

<div class={direction === 'vertical' && 'vertical'}>
	<Button variant="primary">
		<a
			href={primaryButton.link}
			rel={primaryButton.external && 'noopener noreferrer'}
			target={primaryButton.external && '_blank'}
		>
			{primaryButton.text}
		</a>
	</Button>
	<Button variant="secondary">
		<a
			href={secondaryButton.link}
			rel={secondaryButton.external && 'noopener noreferrer'}
			target={secondaryButton.external && '_blank'}
		>
			{secondaryButton.text}
		</a>
	</Button>
</div>

<style lang="scss">
	@import '../../styles/breakpoints.scss';

	div {
		display: flex;
		flex-direction: column;

		@media (sizes-xs) {
			flex-direction: row;
		}
	}

	.vertical {
		flex-direction: column;
	}
</style>
