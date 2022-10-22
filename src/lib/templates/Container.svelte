<script lang="ts">
	import { css } from '$utils/stitches.config';

	let className: string = '';
	export { className as class };

	const containerStyles = css({
		width: '80%',
		maxWidth: '1120px',
		margin: '0 auto'
	});
</script>

<div class={`${className} ${containerStyles()}`}>
	<slot />
</div>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	div {
		/* width: 90%;
		margin: 0 auto; */

		/* @media (min-width: $mobile-xl) {
			width: 80%;
			max-width: 1160px;
		} */
	}

	.section__layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;

		@media (min-width: $tablet) {
			grid-template-columns: min-content 1fr;
		}
	}
</style>
