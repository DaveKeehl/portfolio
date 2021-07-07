<script lang="ts">
	import type { IHeader } from '$utils/lib';

	export let header: IHeader;
	const { logo, navigation, socials } = header;
</script>

<header>
	<img src={logo.url} alt="" />

	<nav>
		{#each navigation as item}
			<a href={`localhost:3000/#${item}`}>{item.toUpperCase()}</a>
		{/each}
	</nav>

	<div>
		{#each socials as social}
			<a href={social.url} rel="noopener noreferrer">
				<img src={social.url} alt={social.name} />
			</a>
		{/each}
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
	}

	img {
		width: 100px;
	}

	nav a:not(:last-child) {
		margin-right: 1.5rem;
	}
</style>
