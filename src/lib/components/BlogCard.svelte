<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import Label from '$lib/components/Label.svelte';

	import { css } from '$utils/stitches.config';
	import { deCamelCase } from '$utils/functions';

	export let title: string;
	export let slug: string;
	export let image: string;
	export let _type: string;
	export let excerpt: string;

	export let CHUNK: number;
	export let idx: number;

	const cleanType = deCamelCase(_type);

	const cardStyles = css({
		display: 'flex',
		flexDirection: 'column'
	});

	const coverStyles = css({
		display: 'flex',
		overflow: 'hidden',
		marginBottom: '1.5rem',
		borderRadius: '16px',
		border: '1px solid $turquoise-200-A05',

		'& img': {
			width: ' 100%',
			aspectRatio: '16 / 9',
			objectFit: 'cover',
			transform: 'scale(1)',
			transition: 'transform 0.2s'
		},

		'&:hover img': {
			transform: 'scale(1.02)'
		}
	});

	const titleStyles = css({
		display: 'block',
		width: 'fit-content',
		marginBlock: '16px 8px',

		'& h3': {
			h3: 'bold'
		}
	});

	const excerptStyles = css({
		p5: 'regular',
		color: '$blue-100',
		opacity: '0.8'
	});

	const resource = _type === 'caseStudy' ? 'project' : 'blog';
</script>

<div
	class={cardStyles()}
	use:reveal={{
		delay: idx % 2 ? 200 : 0,
		marginBottom: idx >= CHUNK ? 2000 : 200,
		duration: idx >= CHUNK ? 500 : 800
	}}
>
	<a href={`/${resource}/${slug}`} class={coverStyles()}>
		<img src={image} alt={title} loading="lazy" />
	</a>
	<Label>{cleanType}</Label>
	<a href={`/${resource}/${slug}`} class={titleStyles()}><h3>{title}</h3></a>
	<p class={excerptStyles()}>{excerpt}</p>
</div>
