<script lang="ts">
	import Container from '$templates/Container.svelte';
	import { reveal } from 'svelte-reveal';
	import type { IFooter } from '$utils/lib';

	export let footer: IFooter;
	export let homepage: boolean = false;
	export let article: boolean = false;
</script>

<footer use:reveal>
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
				@media (min-width: $tablet) {
					padding-left: $homepage-white-space;
				}

				&::before {
					@media (min-width: $tablet) {
						left: $homepage-white-space;
					}
				}
			}

			&.article {
				width: 100%;
				margin-left: auto;
				margin-right: auto;

				@media (min-width: $tablet-l) {
					width: 70%;
				}
			}
		}
	}
</style>
