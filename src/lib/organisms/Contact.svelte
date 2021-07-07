<script lang="ts">
	import SectionNumber from '$lib/atoms/SectionNumber.svelte';
	import Container from '$lib/templates/Container.svelte';
	import type { IContact } from '$utils/lib';

	export let contact: IContact;
	const { title, text, email } = contact;
</script>

<section class="section" id="contact">
	<Container class="section__layout">
		<SectionNumber number={4} />
		<div>
			<h2 class="margin-bottom-small">{title}</h2>
			<p>{text}</p>
			<a href={`mailto:${email}`}>{email}</a>
		</div>
	</Container>
</section>

<style>
	a {
		display: block;
		margin-top: 1.5rem;
	}
</style>
