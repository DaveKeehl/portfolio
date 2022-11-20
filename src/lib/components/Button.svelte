<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { css } from '$utils/stitches.config';
	import { getHostname } from '$utils/functions';

	const dispatch = createEventDispatcher();

	type Variant = 'primary' | 'secondary';
	type Size = 'small' | 'large';

	let className = '';

	export let href: string | undefined = undefined;
	export let external = false;
	export let variant: Variant = 'primary';
	export let size: Size = 'small';
	export let disabled = false;
	export { className as class };
	export let style = '';

	const handleClick = (event: MouseEvent) => {
		dispatch('click', {
			event
		});
	};

	const buttonStyles = css({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
		borderRadius: '10px',
		height: 'fit-content',
		textAlign: 'center',
		width: '100%',
		border: '1px solid $turquoise-200-A05',
		transition: 'color 0.2s, background 0.2s',

		'&:disabled': {
			cursor: 'not-allowed'
		},

		'@md': {
			width: 'max-content'
		},

		variants: {
			variant: {
				primary: {
					background: '$turquoise-200',
					color: '$blue-300',

					'&:hover': {
						background: '$turquoise-100'
					},

					'&:focus': {
						outline: 'none',
						boxShadow: '0 0 0 4px $turquoise-300'
					},

					'&:disabled': {
						background: '$grayscale-100',
						color: '$blue-200'
					}
				},
				secondary: {
					background: '$turquoise-100-A10',
					backdropFilter: 'blur(40px)',
					color: '$turquoise-200',

					'&:hover': {
						color: '$turquoise-100'
					},

					'&:active': {
						background: '$turquoise-100-A20',
						color: '$turquoise-100'
					},

					'&:focus': {
						outline: 'none',
						boxShadow: '0 0 0 2px $turquoise-200'
					},

					'&:disabled': {
						background: '$turquoise-100-A10',
						color: '$blue-200'
					}
				}
			},
			size: {
				small: {
					fontSize: '18px',
					fontWeight: '600',
					lineHeight: '27px',
					padding: '10px 20px'
				},
				large: {
					fontSize: '20px',
					fontWeight: '700',
					lineHeight: '30px',
					padding: '12px 20px'
				}
			}
		}
	});
</script>

{#if href}
	<a
		href={external
			? href
			: `${getHostname()}${href.startsWith('/') ? '' : '/'}${href}`}
		rel={external ? 'noopener noreferrer' : ''}
		target={external ? '_blank' : ''}
		{disabled}
		class={`${className} button ${buttonStyles({ variant, size })}`.trim()}
		{style}
		on:click={handleClick}
	>
		<slot />
	</a>
{:else}
	<button
		class={`${className} button ${buttonStyles({ variant, size })}`.trim()}
		{style}
		{disabled}
		on:click
	>
		<slot />
	</button>
{/if}
