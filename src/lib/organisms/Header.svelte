<script lang="ts">
	import type { IHeader } from '$utils/lib';

	export let header: IHeader;
	const { logo, navigation, socials } = header;
</script>

<header>
	<a href="https://davideciulla.com">
		<img src={logo.url} alt="logo" />
	</a>

	<nav>
		{#each navigation as item}
			<a href={`localhost:3000/#${item}`} class="p5--regular">{item.toUpperCase()}</a>
		{/each}
	</nav>

	<div>
		{#each socials as social}
			<a href={social.url} target="_blank" rel="noopener noreferrer">
				<img src={social.image.url} alt={social.name} />
			</a>
		{/each}
	</div>
</header>

<style lang="scss">
	@import '../../styles/colors.scss';

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3rem 0;
		color: $white;
	}

	nav a {
		color: $white;

		&:not(:last-child) {
			margin-right: 1.5rem;
		}
	}

	div {
		display: flex;
		gap: 1rem;
	}
</style>
