<script lang="ts">
	import { reveal } from '$actions/reveal-intersection-observer';

	export let number: number;
</script>

<div use:reveal={{ threshold: 0.9 }}>
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
