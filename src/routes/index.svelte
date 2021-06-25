<script lang="ts">
	import Head from '$lib/templates/Head.svelte';
	import Hero from '$lib/molecules/Hero.svelte';
	import About from '$lib/molecules/About.svelte';
	import Container from '$lib/templates/Container.svelte';
	import SectionNumber from '$lib/atoms/SectionNumber.svelte';
	import Layout from '$lib/templates/Layout.svelte';

	const ids: number[] = [1, 2, 3, 4];
</script>

<Layout>
	<Head title="Davide Ciulla" />

	<Hero />

	{#each ids as id}
		<div class={`${id === 1 && 'gradient-bg'}`}>
			<Container class="section">
				<SectionNumber number={id} />
				<div>
					{#if id === 1}
						<About />
					{:else if id === 2}{:else if id === 3}{:else if id === 4}{/if}
				</div>
			</Container>
		</div>
	{/each}
</Layout>

<style lang="scss">
	@import '../styles/colors.scss';

	.gradient-bg {
		background: linear-gradient(to bottom, $black, transparentize($black, 1));
	}
</style>
