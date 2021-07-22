<script lang="ts">
	import { dev } from '$app/env';
	import { getPrefix } from '$utils/functions';

	export let navigation: string[];
	export let mobile: boolean;

	const prefix: string = getPrefix(dev);
</script>

<nav class:mobile>
	{#each navigation as item}
		<a href={`${prefix}#${item.toLowerCase()}`} class="p5--medium">{item}</a>
	{/each}
</nav>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	nav {
		display: none;

		@media (min-width: $tablet-l) {
			display: flex;
		}

		a {
			color: $white;
			text-transform: uppercase;
			transition: opacity 0.2s;

			&:hover {
				opacity: 0.8;
			}

			&:not(:last-child) {
				margin-right: 1.5rem;
			}
		}

		&.mobile {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			a {
				font-size: 24px;
				font-weight: 700;
				color: $black;
				text-transform: initial;
			}

			@media (min-width: $tablet-l) {
				display: none;
			}
		}
	}
</style>
