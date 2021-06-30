<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import type { IButton } from '$utils/lib';

	type Direction = 'horizontal' | 'vertical';

	export let direction: Direction = 'horizontal';
	export let primary: IButton;
	export let secondary: IButton;
</script>

<div class={direction === 'vertical' && 'vertical'}>
	<Button variant="primary">
		<a
			href={primary.link}
			rel={primary.external && 'noopener noreferrer'}
			target={primary.external && '_blank'}
		>
			{primary.text}
		</a>
	</Button>
	<Button variant="secondary">
		<a
			href={secondary.link}
			rel={secondary.external && 'noopener noreferrer'}
			target={secondary.external && '_blank'}
		>
			{secondary.text}
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
