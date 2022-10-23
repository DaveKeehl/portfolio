<script lang="ts">
	import { css } from '$utils/stitches.config';

	export let socials: {
		_id: string;
		icon: string;
		title: string;
		url: string;
	}[];
	export let mobile: boolean;

	const socialsStyles = css({
		display: 'flex',
		gap: '0.75rem'
	});

	const socialStyles = css({
		display: 'flex',
		transition: 'opacity 0.2s',

		'&:hover': {
			opacity: '0.8'
		}
	});
</script>

<div class:mobile class={socialsStyles()}>
	{#each socials as social}
		<a
			href={social.url}
			target="_blank"
			rel="noopener noreferrer"
			class={socialStyles()}
		>
			<img src={social.icon} alt={social.title} />
		</a>
	{/each}
</div>

<style lang="scss">
	@import '../../styles/breakpoints.scss';
	@import '../../styles/colors.scss';

	div {
		/* display: none;
		gap: 1rem; */

		/* @media (min-width: $tablet-l) {
			display: flex;
		} */

		a {
			/* transition: opacity 0.2s; */

			/* &:hover {
				opacity: 0.8;
			} */
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
