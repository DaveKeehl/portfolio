<script lang="ts">
	import SEO from '$lib/utils/SEO.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Blog from '$lib/sections/Blog.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Footer from '$lib/sections/Footer.svelte';

	import type { IFooter, IHeader, IHomepage, ISiteSettings } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let siteSettings: ISiteSettings;
	export let homepage: IHomepage;
	export let header: IHeader;
	export let footer: IFooter;

	const { hero, about, projects, blog, contact } = homepage;
	const { brandName, tagline, openGraph } = siteSettings;

	const sectionStyles = css({
		display: 'flex',
		flexDirection: 'column',
		gap: '128px',

		'@lg': {
			gap: '160px'
		}
	});
</script>

<SEO title={brandName} description={tagline} {openGraph} />
<Header {header} />
<Hero {hero} />
<div class={sectionStyles()}>
	<About {about} />
	<Projects {projects} />
	<Blog {blog} />
	<Contact {contact} />
	<Footer {footer} />
</div>
