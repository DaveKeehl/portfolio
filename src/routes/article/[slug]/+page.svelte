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

	export let data: PageData;
	let { siteSettings, header, article, footer } = data;
	let { _createdAt, title, image, content, excerpt } = article;

	const createdAt = new Date(_createdAt);
	const day = createdAt.getDate();
	const month = createdAt.toLocaleString('default', { month: 'short' });
	const year = createdAt.getFullYear();
	const date = `${day} ${month} ${year}`;

	const estimatedReadDuration = readTimeEstimate(toPlainText(content));

	onMount(() => section.set(''));

	const articleStyles = css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
		// textAlign: 'center'
	});

	const articleTopStyles = css({
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		position: 'relative',
		overflow: 'hidden'
	});

	const articleMetaStyles = css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '16px',
		paddingBlock: '128px 164px',
		paddingInline: '40px',
		width: '100%',

		'@sm': {
			paddingBlock: '160px 264px'
		}
	});

	const titleStyles = css({
		h1: 'bold'
	});

	const datetimeStyles = css({
		p5: 'regular',
		color: '$blue-100',
		textTransform: 'uppercase'
	});

	const contentSectionStyles = css({
		position: 'relative',
		width: '100%',
		background:
			'linear-gradient(to bottom, $grayscale-300 31.25%, $blue-400 100%)',
		display: 'flex',
		justifyContent: 'center'
	});

	const contentContainerStyles = css({
		width: '700px'
	});

	const imageStyles = css({
		position: 'absolute',
		top: '0',
		left: '50%',
		transform: 'translateX(-50%) translateY(-50%)',
		borderRadius: '20px',
		border: '1px solid $turquoise-200-A05',
		aspectRatio: '16 / 9',
		objectFit: 'cover',
		width: '90%',

		'@sm': {
			width: '600px'
		},

		'@md': {
			width: '700px'
		}
	});

	const contentStyles = css({
		color: '$blue-100',
		marginBlock: '288px 160px',
		textAlign: 'left',

		'& p': {
			p4: 'regular',
			opacity: '0.9'
		},

		'& h1': {
			color: '$grayscale-100',
			marginBlock: '64px 16px'
		}
	});
</script>

<SEO
	{title}
	description={siteSettings.tagline}
	openGraph={{ image: image.url }}
/>

<div class={articleStyles()}>
	<div class={articleTopStyles()}>
		<Header {header} />
		<div class={articleMetaStyles()}>
			<Label>ARTICLE</Label>
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
</div>

<Footer {footer} />
