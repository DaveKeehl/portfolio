<script lang="ts">
	import Head from '$lib/templates/Head.svelte';
	import Hero from '$lib/organisms/Hero.svelte';
	import About from '$lib/organisms/About.svelte';
	import Projects from '$lib/organisms/Projects.svelte';
	import Articles from '$lib/organisms/Articles.svelte';
	import Contact from '$lib/organisms/Contact.svelte';
	import type { IHomepage } from '$utils/lib';

	export let data: IHomepage;
	const { hero, about, projectSectionTitle, projects, blogSectionTitle, articles, contact } = data;
</script>

<Head title="Davide Ciulla" />

<Hero {hero} />
<About {about} />
<Projects title={projectSectionTitle} {projects} />
<Articles title={blogSectionTitle} {articles} />
<Contact {contact} />
