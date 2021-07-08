<script lang="ts">
	import Container from '$lib/templates/Container.svelte';
	import type { IFooter } from '$utils/lib';

	export let footer: IFooter;
</script>

<footer>
	<Container>
		<div>
			{@html footer.text.html}
		</div>
	</Container>
</footer>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	footer {
		padding-bottom: 80px;

		div {
			position: relative;
			margin-top: 204px;
			padding-top: 40px;

			$white-space: 5rem;

			@media (min-width: $sizes-sm) {
				padding-left: $white-space;
			}

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 50px;
				height: 1px;
				background: $blue-200;

				@media (min-width: $sizes-sm) {
					left: $white-space;
				}
			}
		}
	}
</style>
