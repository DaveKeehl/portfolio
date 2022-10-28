<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { css } from '$utils/stitches.config';

	const dispatch = createEventDispatcher();

	export let text: string;
	export let selected = false;
	export let disabled = false;

	const labelStyles = css({
		p5: 'semiBold',
		background: '$turquoise-100-A10',
		color: '$turquoise-200',
		padding: '8px 20px',
		borderRadius: '24px',
		userSelect: 'none',
		transition: 'color 0.2s, box-shadow 0.1s',

		'&:disabled': {
			color: '$blue-200',
			background: '$turquoise-100-A10',
			cursor: 'not-allowed'
		},

		'&:hover': {
			cursor: 'pointer',
			color: '$turquoise-100'
		},

		'&:focus': {
			outline: '2px solid $turquoise-100-A20'
		},

		variants: {
			selected: {
				true: {
					outline: '2px solid $turquoise-200'
				}
			}
		}
	});

	const handleClick = (event: MouseEvent) => {
		dispatch('click', { event });
	};
</script>

<p class={labelStyles({ selected })} on:click={handleClick} {disabled}>
	{text}
</p>
