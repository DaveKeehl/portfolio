<script lang="ts">
  import RichContent from '$components/RichContent.svelte';
  import Divider from '$components/Posts/Divider.svelte';
  import Post from '$pages/Post.svelte';

  import type { PageData } from './$types';
  import { css } from '$utils/stitches.config';

  export let data: PageData;

  $: post = {
    siteSettings: data.siteSettings,
    header: data.header,
    footer: data.footer,
    title: data.article.title,
    _createdAt: data.article._createdAt,
    image: data.article.image,
    content: data.article.content,
    relatedPosts: data.relatedPosts
  };

  const dividerStyles = css({
    marginBlock: '104px'
  });
</script>

<Post {...post} label="ARTICLE" maxWidth={800}>
  <RichContent content={data.article.content} />
  <Divider class={dividerStyles()} />
</Post>
