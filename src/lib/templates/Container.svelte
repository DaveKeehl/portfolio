<div>
	<slot />
</div>

<style lang="scss">
	@import '../../styles/breakpoints.scss';

	div {
		width: 90%;
		margin: 0 auto;

		@media (min-width: $sizes-xs) {
			width: 80%;
			max-width: 1160px;
		}
	}
</style>
