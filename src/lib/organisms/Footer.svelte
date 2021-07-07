<script lang="ts">
	import type { IFooter } from '$utils/lib';

	export let footer: IFooter;
</script>

<footer>
	<div>
		{@html footer.text.html}
	</div>
</footer>

<style lang="scss">
	@import '../../styles/colors.scss';

	footer {
		padding-left: 4.5rem;

		div {
			position: relative;
			margin-top: 204px;
			padding-top: 40px;
			margin-bottom: 80px;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 50px;
				height: 1px;
				background: $blue-200;
			}
		}
	}
</style>
