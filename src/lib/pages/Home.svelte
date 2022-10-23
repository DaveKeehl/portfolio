<script lang="ts">
	import SEO from '$templates/SEO.svelte';

	import Hero from '$organisms/Hero.svelte';
	import About from '$organisms/About.svelte';
	import Projects from '$organisms/Projects.svelte';
	import Blog from '$organisms/Blog.svelte';
	import Contact from '$organisms/Contact.svelte';
	import Header from '$organisms/Header.svelte';
	import Footer from '$organisms/Footer.svelte';

	import type { IHomepage, ISiteSettings } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let homepage: IHomepage;
	export let siteSettings: ISiteSettings;

	const { hero, about, projects, blog, contact, header, footer } = homepage;
	const { brandName, tagline } = siteSettings;

	const sectionStyles = css({
		display: 'flex',
		flexDirection: 'column',
		gap: '128px',

		'@lg': {
			gap: '160px'
		}
	});
</script>

<SEO title={brandName} description={tagline} />
<Header {header} />
<Hero {hero} />
<div class={sectionStyles()}>
	<About {about} />
	<Projects {projects} />
	<Blog {blog} />
	<Contact {contact} />
	<Footer {footer} />
</div>
