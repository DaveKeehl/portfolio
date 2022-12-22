<script lang="ts">
  import RichContent from '$components/RichContent.svelte';
  import Divider from '$components/Posts/Divider.svelte';
  import Post from '$pages/Post.svelte';

  import type { PageData } from './$types';

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
</script>

<Post {...post} label="ARTICLE" isArticle>
  <RichContent content={data.article.content} />
  <Divider class="my-16 md:my-[104px]" />
</Post>
