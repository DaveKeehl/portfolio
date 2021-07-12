<script lang="ts">
	import SEO from '$lib/templates/SEO.svelte';
	import Hero from '$lib/organisms/Hero.svelte';
	import About from '$lib/organisms/About.svelte';
	import Projects from '$lib/organisms/Projects.svelte';
	import Articles from '$lib/organisms/Articles.svelte';
	import Contact from '$lib/organisms/Contact.svelte';
	import type { IArticle, IHomepage, IProject } from '$utils/lib';

	export let homepage: IHomepage;
	export let projects: IProject[];
	export let articles: IArticle[];

	const {
		pageTitle,
		pageDescription,
		hero,
		about,
		projectSectionTitle,
		blogSectionTitle,
		contact
	} = homepage;
</script>

<SEO title={pageTitle} description={pageDescription} />
<Hero {hero} />
<About {about} />
<Projects title={projectSectionTitle} {projects} />
<Articles title={blogSectionTitle} {articles} {projects} />
<Contact {contact} />
