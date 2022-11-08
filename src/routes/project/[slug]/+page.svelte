<script lang="ts">
	import { PortableText, toPlainText } from '@portabletext/svelte';
	import readTimeEstimate from 'read-time-estimate';
	import { onMount } from 'svelte';

	import SanityImage from '$components/SanityImage.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Label from '$components/Label.svelte';
	import BlurredCircle from '$components/BlurredCircle.svelte';
	import SEO from '$lib/utils/SEO.svelte';

	import type { PageData } from './$types';
	import { section } from '$utils/stores';
	import { css } from '$utils/stitches.config';
	import BlogCard from '$components/BlogCard.svelte';

	export let data: PageData;
	let { siteSettings, header, project, relatedPosts, footer } = data;
	let { _createdAt, title, image, content } = project;

	const createdAt = new Date(_createdAt);
	const day = createdAt.getDate();
	const month = createdAt.toLocaleString('default', { month: 'short' });
	const year = createdAt.getFullYear();
	const date = `${day} ${month} ${year}`;

	const estimatedReadDuration = readTimeEstimate(toPlainText(content));

	onMount(() => section.set(''));

	const articleTopStyles = css({
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	});

	const articleMetaStyles = css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '16px',
		paddingBlock: '96px 176px',
		paddingInline: '40px',
		width: '100%',

		'@sm': {
			paddingBlock: '96px 240px'
		},

		'@md': {
			paddingBlock: '96px 264px'
		},

		'@lg': {
			paddingBlock: '160px 264px'
		}
	});

	const titleStyles = css({
		h1: 'bold',
		textAlign: 'center'
	});

	const datetimeStyles = css({
		p5: 'regular',
		color: '$blue-100',
		textTransform: 'uppercase'
	});

	const contentSectionStyles = css({
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		background:
			'linear-gradient(to bottom, $grayscale-300 150px, transparent 550px)'
	});

	const contentContainerStyles = css({
		width: '80%',
		maxWidth: '700px'
	});

	const imageStyles = css({
		position: 'absolute',
		top: '0',
		left: '50%',
		transform: 'translateX(-50%) translateY(-50%)',
		width: '80%',
		maxWidth: '700px',
		borderRadius: '20px',
		border: '1px solid $turquoise-200-A05',
		aspectRatio: '16 / 9',
		objectFit: 'cover'
	});

	const contentStyles = css({
		color: '$blue-100',
		textAlign: 'left',
		marginBlock: '180px 160px',

		'@xs': {
			marginBlock: '200px 160px'
		},

		'@sm': {
			marginBlock: '240px 160px'
		},

		'@md': {
			marginBlock: '288px 160px'
		},

		'& p': {
			p4: 'regular',
			opacity: '0.9'
		},

		'& h1': {
			color: '$grayscale-100',
			marginBlock: '64px 16px'
		}
	});

	const relatedContainerStyles = css({
		width: '80%',
		maxWidth: '700px',
		margin: '0 auto',
		marginBottom: '160px'
	});

	const relatedTitleStyles = css({
		h2: 'bold'
	});

	const relatedPostsStyles = css({
		display: 'flex',
		flexDirection: 'row',
		gap: '16px'
	});

	const footerContainerStyles = css({
		width: '80%',
		maxWidth: '700px',
		margin: '0 auto'
	});
</script>

<SEO
	title={`${title} | Davide Ciulla`}
	description={siteSettings.tagline}
	openGraph={{ image: image.url }}
/>

<Header {header} />

<div class={articleTopStyles()}>
	<div class={articleMetaStyles()}>
		<Label>CASE STUDY</Label>
		<h1 class={titleStyles()}>{title}</h1>
		<p class={datetimeStyles()}>
			{date} • {Math.ceil(estimatedReadDuration.duration)} MIN READ
		</p>
	</div>
	<BlurredCircle />
</div>

<div class={contentSectionStyles()}>
	<div class={contentContainerStyles()}>
		<SanityImage src={image.url} alt="" class={imageStyles()} />
		<div class={contentStyles()}>
			<PortableText value={content} />
		</div>
	</div>
</div>

<div class={relatedContainerStyles()}>
	<h2 class={relatedTitleStyles()}>Other posts.</h2>
	<div class={relatedPostsStyles()}>
		{#each relatedPosts as card}
			<BlogCard {...card} />
		{/each}
	</div>
</div>

<div class={footerContainerStyles()}>
	<Footer {footer} />
</div>
