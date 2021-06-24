<script lang="ts">
	type Variant = 'primary' | 'secondary';
	type Size = 'small' | 'large';
	type Mode = 'default' | 'left-icon' | 'right-icon';

	export let variant: Variant = 'primary';
	export let size: Size = 'small';
	export let mode: Mode = 'default';
	export let icon: string = '';
	export let text: String = 'Default button text';
</script>

<button class={`button__${variant} button__${size} button__${mode}`}>{text}</button>

<style>
	button {
		border: 0;
	}

	.button__primary {
		background: tomato;
	}

	.button__secondary {
		background: yellow;
	}

	.button__small {
	}

	.button__large {
	}
</style>
