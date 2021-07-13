<script lang="ts">
	import { dev } from '$app/env';
	import { getPrefix } from '$utils/functions';

	export let navigation: string[];
	export let mobile: boolean;

	const prefix: string = getPrefix(dev);
</script>

<nav class:mobile>
	{#each navigation as item}
		<a href={`${prefix}#${item}`} class="p5--medium">{item.toUpperCase()}</a>
	{/each}
</nav>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	nav {
		display: none;

		@media (min-width: $tablet) {
			display: flex;
		}

		a {
			color: $white;
			transition: opacity 0.2s;

			&:hover {
				opacity: 0.8;
			}

			&:not(:last-child) {
				margin-right: 1.5rem;
			}
		}

		&.mobile {
			@media (min-width: $tablet) {
				display: none;
			}
		}
	}
</style>
