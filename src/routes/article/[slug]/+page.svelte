<script lang="ts">
	import RichContent from '$components/RichContent.svelte';
	import Divider from '$components/Posts/Divider.svelte';
	import Post from '$pages/Post.svelte';

	import type { PageData } from './$types';
	import { css } from '$utils/stitches.config';

	export let data: PageData;
	let { siteSettings, header, article, relatedPosts, footer } = data;
	let { _createdAt, title, image, content } = article;

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
	label="ARTICLE"
	maxWidth={700}
>
	<RichContent {content} />
	<Divider class={dividerStyles()} />
</Post>
