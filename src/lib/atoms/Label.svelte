<script lang="ts">
	export let selected: boolean = false;
	export let category: string;
	export let toggleCategory: (category: string) => void;
</script>

<p class:selected class="p5--semibold" on:click={() => toggleCategory(category)}>
	{category}
</p>

<style lang="scss">
	@import '../../styles/colors.scss';

	p {
		background: $turquoise-100-a10;
		color: $turquoise-200;
		padding: 0.5rem 1.25rem;
		border-radius: 1.5rem;
		box-shadow: 0 0 0 2px transparent;
		transition: color 0.2s, box-shadow 0.1s;

		&::selection {
			background: none;
		}

		&:hover {
			cursor: pointer;
			color: $turquoise-100;
		}

		&.selected {
			color: $turquoise-200;
			box-shadow: 0 0 0 2px $turquoise-200;

			&:hover {
				color: $turquoise-100;
				box-shadow: 0 0 0 2px $turquoise-100;
			}
		}
	}
</style>
