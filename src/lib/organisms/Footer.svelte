<script lang="ts">
	import Container from '$lib/templates/Container.svelte';
	import type { IFooter } from '$utils/lib';

	export let footer: IFooter;
	export let homepage: boolean = false;
	export let article: boolean = false;
</script>

<footer>
	<Container>
		<div class:homepage class:article>
			{@html footer.text.html}
		</div>
	</Container>
</footer>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	$homepage-white-space: 5rem;

	footer {
		padding-bottom: 80px;

		div {
			position: relative;
			margin-top: 204px;
			padding-top: 40px;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 50px;
				height: 1px;
				background: $blue-200;
			}

			&.homepage {
				@media (min-width: $sizes-sm) {
					padding-left: $homepage-white-space;
				}

				&::before {
					@media (min-width: $sizes-sm) {
						left: $homepage-white-space;
					}
				}
			}

			&.article {
				width: 100%;
				margin-left: auto;
				margin-right: auto;

				@media (min-width: $sizes-md) {
					width: 70%;
				}
			}
		}
	}
</style>
