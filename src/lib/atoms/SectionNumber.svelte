<script lang="ts">
	import { revealOnScroll } from '$actions/revealOnScroll';

	export let number: number;
</script>

<div use:revealOnScroll>
	<p>{number}</p>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';

	div {
		display: grid;
		place-items: center;
		border-radius: 0.5rem;
		border: 2px solid $white;
		width: 45px;
		height: 45px;
	}

	p {
		font-size: 1.5rem;
		font-weight: 700;
		color: $white;
	}
</style>
