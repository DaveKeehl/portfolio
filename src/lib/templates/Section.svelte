<script lang="ts">
	import SectionNumber from '$lib/atoms/SectionNumber.svelte';
	import Container from '$lib/templates/Container.svelte';
	import { reveal } from '$actions/revealOnScroll';

	let className: string = '';
	export { className as class };
	export let id: string = '';
	export let number: number;
	export let isAbout: boolean = false;
</script>

<section class:section__about={isAbout} class={`section ${className}`} {id}>
	<Container class="section__layout">
		<SectionNumber {number} />
		<div>
			<slot />
		</div>
	</Container>
</section>

<style lang="scss">
	@import '../../styles/colors.scss';

	.section__about {
		padding-top: 8rem;
		background: linear-gradient(to bottom, $black 0%, $black 30%, transparentize($black, 1));
	}
</style>
