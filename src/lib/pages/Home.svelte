<script lang="ts">
	import SEO from '$lib/templates/SEO.svelte';
	import Hero from '$lib/organisms/Hero.svelte';
	import About from '$lib/organisms/About.svelte';
	import Projects from '$lib/organisms/Projects.svelte';
	import Articles from '$lib/organisms/Articles.svelte';
	import Contact from '$lib/organisms/Contact.svelte';
	import type { IHomepage, IProject } from '$utils/lib';

	export let homepage: IHomepage;
	const {
		pageTitle,
		pageDescription,
		hero,
		about,
		projectSectionTitle,
		blogSectionTitle,
		articles,
		contact
	} = homepage;
	export let projects: IProject[];
</script>

<SEO title={pageTitle} description={pageDescription} />
<Hero {hero} />
<About {about} />
<Projects title={projectSectionTitle} {projects} />
<Articles title={blogSectionTitle} {articles} />
<Contact {contact} />
