<script lang="ts">
	import { getHostname } from '$utils/functions';
	import { css } from '$utils/stitches.config';

	export let sections: {
		_id: string;
		name: string;
	}[];
	export let mobile: boolean;

	const prefix: string = getHostname();

	const navItemStyles = css({
		color: '$blue-200',
		fontSize: '$p5',
		fontWeight: '600',
		lineHeight: '24px',
		letterSpacing: '2%',
		textTransform: 'uppercase',
		transition: 'color 0.2s',

		'&:hover': {
			color: '$grayscale-100'
		}
	});
</script>

<nav class:mobile>
	{#each sections as section}
		<a href={`${prefix}#${section.name.toLowerCase()}`} class={navItemStyles()}
			>{section.name}</a
		>
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
			/* color: $white; */
			/* text-transform: uppercase; */
			/* transition: opacity 0.2s; */

			/* &:hover { */
			/* opacity: 0.8; */
			/* } */

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
