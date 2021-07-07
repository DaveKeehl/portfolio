<script lang="ts">
	type Variant = 'primary' | 'secondary';
	type Size = 'small' | 'large';
	type State = 'default' | 'success' | 'warning' | 'error';
	type Direction = 'normal' | 'reverse';

	export let href: string;
	export let external: boolean;

	export let variant: Variant = 'primary';
	export let size: Size = 'small';
	export let state: State = 'default';

	export let direction: Direction = 'normal';
	export let disabled: boolean = false;
</script>

<a
	{href}
	rel={external && 'noopener noreferrer'}
	class={`button button__variant--${variant} button__size--${size} button__direction--${direction} button__state--${state}`}
	{disabled}
>
	<slot />
</a>

<style lang="scss">
	@import '../../styles/colors.scss';

	.button {
		display: flex;
		flex-direction: row;
		padding: 14px 24px;
		border-radius: 8px;
		width: fit-content;
		transition: color 0.2s, background 0.2s;
	}

	.button__direction {
		&--normal {
			flex-direction: row;
		}

		&--reverse {
			flex-direction: row-reverse;
		}
	}

	.button__variant {
		&--primary {
			background: $turquoise-200;
			color: $blue-300;

			&:hover {
				background: $turquoise-100;
			}

			&:active {
				background: $turquoise-200;
			}

			&:focus {
				outline: none;
				box-shadow: 0 0 0 4px $turquoise-300;
			}

			&:disabled {
				background: $white;
				color: $blue-200;
				cursor: not-allowed;
			}

			&.button__state {
				&--default {
					box-shadow: 0 8px 32px $turquoise-200-a20;
				}

				&--success {
					background: $success;
				}

				&--warning {
					background: $warning;
				}

				&--error {
					background: $error;
					color: $white;
				}
			}
		}

		&--secondary {
			background: $turquoise-100-a10;
			backdrop-filter: blur(40px);
			color: $turquoise-200;

			&:hover {
				color: $turquoise-100;
			}

			&:active {
				background: $turquoise-100-a20;
			}

			&:focus {
				outline: none;
				box-shadow: 0 0 0 4px $turquoise-200;
			}

			&:disabled {
				color: $blue-200;
				cursor: not-allowed;
			}

			&.button__state {
				&--success {
					background: $success-bg;
					color: $success;
				}

				&--warning {
					background: $warning-bg;
					color: $warning;
				}

				&--error {
					background: $error-bg;
					color: $error;
				}
			}
		}
	}

	.button {
		&__size {
			&--small {
				font-weight: 600;
				font-size: 18px;
				line-height: 124%;
			}

			&--large {
				font-weight: 700;
				font-size: 20px;
				line-height: 118%;
			}
		}
	}

	/* .button {
		&__state {
			&--success {

			}

			&--warning {
			}

			&--error {
			}
		}
	} */
</style>
