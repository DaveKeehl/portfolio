<script lang="ts">
	import type { ISocial } from '$utils/lib';

	export let socials: ISocial[];
	export let mobile: boolean;
</script>

<div class:mobile>
	{#each socials as social}
		<a href={social.url} target="_blank" rel="noopener noreferrer">
			<img src={social.image.url} alt={social.image.alt} />
		</a>
	{/each}
</div>

<style lang="scss">
	@import '../../styles/breakpoints.scss';
	@import '../../styles/colors.scss';

	div {
		display: none;
		gap: 1rem;

		@media (min-width: $tablet-l) {
			display: flex;
		}

		a {
			transition: opacity 0.2s;

			&:hover {
				opacity: 0.8;
			}
		}

		&.mobile {
			display: flex;
			border-top: 1px solid $blue-100;
			width: 100%;
			padding-top: 1rem;

			a {
				filter: invert(1);
				text-transform: initial;
			}

			@media (min-width: $tablet-l) {
				display: none;
			}
		}
	}
</style>
