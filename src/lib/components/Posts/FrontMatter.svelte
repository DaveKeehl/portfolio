<script lang="ts">
	import { toPlainText } from '@portabletext/svelte';

	import BlurredCircle from '$components/BlurredCircle.svelte';
	import Label from '$components/Label.svelte';

	import { css } from '$utils/stitches.config';
	import readTime from '$utils/readTimeEstimate';

	export let _createdAt: string;
	export let content: any;
	export let title: string;
	export let label: string;

	const createdAt = new Date(_createdAt);
	const day = createdAt.getDate();
	const month = createdAt.toLocaleString('default', { month: 'short' });
	const date = `${day} ${month} ${createdAt.getFullYear()}`;

	const estimatedReadDuration = readTime(toPlainText(content));

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
			paddingBlock: '128px 264px'
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
</script>

<div class={articleTopStyles()}>
	<div class={articleMetaStyles()}>
		<Label>{label}</Label>
		<h1 class={titleStyles()}>{title}</h1>
		<p class={datetimeStyles()}>
			{date} • {Math.ceil(estimatedReadDuration.duration)} MIN READ
		</p>
	</div>
	<BlurredCircle />
</div>
