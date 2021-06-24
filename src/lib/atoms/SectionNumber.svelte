<script lang="ts">
	export let number: number;
</script>

<div>
	<p>{number}</p>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';

	div {
		display: flex;
		border-radius: 8px;
		border: 2px solid $white;
		width: fit-content;
		height: fit-content;
		padding: 8px 14px;
	}
</style>
