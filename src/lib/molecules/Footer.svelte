<footer>
	CREATED WITH <a href="https://kit.svelte.dev/" rel="noopener noreferrer" target="_blank">SVELTE</a
	>
	AND <a href="https://graphcms.com/" rel="noopener noreferrer" target="_blank">GRAPHCMS</a>.
	<br />
	READ THE <a href="">CASE STUDY</a>
</footer>

<style lang="scss">
	@import '../../styles/colors.scss';

	footer {
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
</style>
