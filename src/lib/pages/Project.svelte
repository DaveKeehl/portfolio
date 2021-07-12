<script lang="ts">
	import type { IProject } from '$utils/lib';
	import ArticleTop from '$lib/molecules/ArticleTop.svelte';
	import Container from '$lib/templates/Container.svelte';
	import ButtonsGroup from '$lib/molecules/ButtonsGroup.svelte';
	import SEO from '$lib/templates/SEO.svelte';

	export let project: IProject;
	const {
		title,
		liveUrl,
		repositoryUrl,
		visitButtonText,
		cover,
		industry,
		year,
		productType,
		role,
		description,
		metrics,
		projectSections
	} = project;
</script>

<SEO title={`${title} | Davide Ciulla`} {description} />

<Container>
	<article>
		<ArticleTop {title} category="Case Study" {cover} />

		<div class="wrapper">
			<section>
				<div class="information">
					<div>
						<h4 class="h4--semibold">Industry</h4>
						<p class="p1--bold">{industry}</p>
					</div>
					<div>
						<h4 class="h4--semibold">Year</h4>
						<p class="p1--bold">{year}</p>
					</div>
					<div>
						<h4 class="h4--semibold">Product type</h4>
						<p class="p1--bold">{productType}</p>
					</div>
					<div>
						<h4 class="h4--semibold">Role</h4>
						<p class="p1--bold">{role.join(', ')}</p>
					</div>
				</div>

				<div class="introduction">
					<h2 class="h2--bold">In a nutshell.</h2>
					<p class="p3--regular">{description}</p>
					<ButtonsGroup
						primaryButton={{
							text: visitButtonText,
							link: liveUrl,
							external: true
						}}
						secondaryButton={{
							text: 'GitHub Repository',
							link: repositoryUrl,
							external: true
						}}
						direction="horizontal"
					/>
				</div>
			</section>

			<div class="metrics">
				{#each metrics as metric}
					<div>
						<h1 class="h1--bold">{metric.value}</h1>
						<p class="p4--SEMIBOLD">{metric.name}</p>
					</div>
				{/each}
			</div>

			<div class="content">
				{#each projectSections as section}
					<section>
						<h2 class="h2--semibold">{section.title}</h2>
						<p class="p3--regular">{@html section.content.html}</p>
					</section>
				{/each}
			</div>
		</div>
	</article>
</Container>

<style lang="scss">
	@import '../../styles/colors.scss';
	@import '../../styles/breakpoints.scss';

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 7.5rem;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		@media (min-width: $tablet-l) {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
		}

		& > *:nth-child(1) {
			grid-column: 1 / 5;
			grid-row: 1 / 2;
		}

		& > *:nth-child(2) {
			grid-column: 6 / -1;
			grid-row: 1 / 2;
		}
	}

	.information {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		margin-bottom: 6rem;

		@media (min-width: $tablet-l) {
			margin-bottom: 0;
		}

		h4 {
			color: $blue-100;
		}

		p {
			color: $white;
		}
	}

	.introduction {
		h2 {
			margin-bottom: 2rem;
		}

		p {
			margin-bottom: 3rem;
		}
	}

	.metrics {
		$border-width: 1px;
		display: flex;
		flex-wrap: wrap;
		gap: 3rem;
		justify-content: space-around;
		border-top: $border-width solid $turquoise-100-a10;
		border-bottom: $border-width solid $turquoise-100-a10;
		padding: 2rem 0;

		@media (min-width: $mobile-xl) {
			gap: 4rem;
		}

		@media (min-width: $laptop-l) {
			gap: 0;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
