<script lang="ts">
	import ButtonsGroup from '$components/ButtonsGroup.svelte';
	import RichContent from '$components/RichContent.svelte';
	import Divider from '$components/Posts/Divider.svelte';
	import ProjectDetail from '$components/Posts/ProjectDetail.svelte';
	import Post from '$pages/Post.svelte';

	import type { PageData } from './$types';
	import { css } from '$utils/stitches.config';

	export let data: PageData;
	let { siteSettings, header, project, relatedPosts, footer } = data;
	let {
		_createdAt,
		title,
		image,
		content,
		nutshell,
		industry,
		year,
		roles,
		technologies,
		type,
		repositoryButton,
		liveButton
	} = project;

	const introStyles = css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '72px',

		'@md': {
			flexDirection: 'row'
		}
	});

	const detailsStyles = css({
		flex: '2',
		display: 'flex',
		flexDirection: 'column',
		gap: '28px'
	});

	const technologyLinkStyles = css({
		display: 'inline-flex',

		'& a': {
			p4: 'medium',
			color: '$grayscale-100',

			'&:hover': {
				cursor: 'ne-resize',
				textDecoration: 'underline'
			}
		}
	});

	const nutshellBlockStyles = css({
		flex: '3',
		display: 'flex',
		flexDirection: 'column',
		gap: '32px'
	});

	const nutshellStyles = css({
		h2: 'bold'
	});

	const dividerStyles = css({
		marginBlock: '104px'
	});
</script>

<Post
	{siteSettings}
	{header}
	{footer}
	{title}
	{_createdAt}
	{image}
	{relatedPosts}
	{content}
	label="CASE STUDY"
	maxWidth={900}
>
	<div class={introStyles()}>
		<div class={detailsStyles()}>
			<ProjectDetail title="Project type">{type}</ProjectDetail>
			<ProjectDetail title="Year">{year}</ProjectDetail>
			<ProjectDetail title="Roles">{roles.join(', ')}</ProjectDetail>
			<ProjectDetail title="Technologies">
				{#each technologies as technology, idx}
					<span class={technologyLinkStyles()}>
						<a href={technology.url} target="_blank" rel="noreferrer">
							{technology.title}
						</a>
						{#if idx < technologies.length - 1}
							{', '}
						{/if}
					</span>
				{/each}
			</ProjectDetail>
		</div>

		<div class={nutshellBlockStyles()}>
			<h2 class={nutshellStyles()}>In a nutshell</h2>
			<RichContent content={nutshell} />
			<ButtonsGroup
				primary={{
					href: liveButton.url,
					text: liveButton.text,
					external: true
				}}
				secondary={{
					href: repositoryButton.url,
					text: repositoryButton.text,
					external: true
				}}
				size="small"
			/>
		</div>
	</div>

	<Divider class={dividerStyles()} />
	<RichContent {content} />
	<Divider class={dividerStyles()} />
</Post>
