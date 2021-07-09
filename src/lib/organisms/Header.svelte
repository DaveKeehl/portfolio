<script lang="ts">
	import { dev } from '$app/env';
	import { getPrefix, website } from '$utils/functions';
	import Container from '$lib/templates/Container.svelte';
	import type { IHeader } from '$utils/lib';

	export let header: IHeader;
	const { logo, navigation, socials } = header;

	const prefix: string = getPrefix(dev);
</script>

<header>
	<Container>
		<div class="wrapper">
			<a href={prefix}>
				<img src={logo.url} alt={logo.alt} />
			</a>

			<nav>
				{#each navigation as item}
					<a href={`${prefix}#${item}`} class="p5--regular">{item.toUpperCase()}</a>
				{/each}
			</nav>

			<div class="socials">
				{#each socials as social}
					<a href={social.url} target="_blank" rel="noopener noreferrer">
						<img src={social.image.url} alt={social.image.alt} />
					</a>
				{/each}
			</div>
		</div>
	</Container>
</header>

<style lang="scss">
	@import '../../styles/colors.scss';

	.wrapper {
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

	.socials {
		display: flex;
		gap: 1rem;

		a {
			transition: opacity 0.2s;

			&:hover {
				opacity: 0.8;
			}
		}
	}
</style>
