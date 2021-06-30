<script lang="ts">
	import Head from '$lib/templates/Head.svelte';
	import Hero from '$lib/molecules/Hero.svelte';
	import About from '$lib/molecules/About.svelte';
	import Container from '$lib/templates/Container.svelte';
	import SectionNumber from '$lib/atoms/SectionNumber.svelte';
	import Layout from '$lib/templates/Layout.svelte';
	import ProjectCard from '$lib/organisms/ProjectCard.svelte';

	const ids: number[] = [1, 2, 3, 4];
</script>

<Layout>
	<Head title="Davide Ciulla" />

	<Hero />

	<div class="gradient-bg">
		<Container class="section">
			<SectionNumber number={1} />
			<div>
				<About />
			</div>
		</Container>
	</div>

	<Container class="section">
		<SectionNumber number={2} />
		<div>
			<ProjectCard
				imagePath=""
				imageAlt=""
				excerpt=""
				title=""
				technologies={[]}
				primaryButton={{ text: '', link: 'https://www.google.com', external: true }}
				secondaryButton={{ text: '', link: 'https://www.google.com', external: true }}
			/>
		</div>
	</Container>
</Layout>

<style lang="scss">
	@import '../styles/colors.scss';

	.gradient-bg {
		background: linear-gradient(to bottom, $black, transparentize($black, 1));
	}
</style>
