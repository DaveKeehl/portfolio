<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class={`${className}`}>
	<slot />
</div>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	div {
		width: 90%;
		margin: 0 auto;

		@media (min-width: $sizes-xs) {
			width: 80%;
			max-width: 1160px;
		}
	}

	.section__layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 32px;

		@media (min-width: $sizes-sm) {
			grid-template-columns: min-content 1fr;
		}
	}
</style>
