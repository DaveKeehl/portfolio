<script lang="ts">
  import ButtonsGroup from '$components/ButtonsGroup.svelte';
  import RichContent from '$components/PortableText/RichContent.svelte';
  import Divider from '$components/Posts/Divider.svelte';
  import ProjectDetail from '$components/Posts/ProjectDetail.svelte';
  import Post from '$pages/Post.svelte';

  import type { PageData } from './$types';
  import Button from '$components/Button.svelte';

  export let data: PageData;

  $: post = {
    siteSettings: data.siteSettings,
    header: data.header,
    footer: data.footer,
    title: data.project.title,
    _updatedAt: data.project._updatedAt,
    image: data.project.image,
    content: data.project.content,
    relatedPosts: data.relatedPosts
  };
</script>

<Post {...post} label="CASE STUDY" isArticle={false}>
  <div class="flex flex-col justify-between gap-16 md:flex-row">
    <div class="flex flex-[2] flex-col gap-7">
      <ProjectDetail title="Project type">{data.project.type}</ProjectDetail>
      <ProjectDetail title="Year">{data.project.year}</ProjectDetail>
      <ProjectDetail title="Roles">
        {data.project.roles.join(', ')}
      </ProjectDetail>
      <ProjectDetail title="Technologies">
        {data.project.technologies.map((tech) => tech.title).join(', ')}
      </ProjectDetail>
    </div>

    <div class="flex flex-[3] flex-col gap-8 ">
      <h2 class="h2-bold">In a nutshell</h2>
      <RichContent content={data.project.nutshell} />
      {#if data.project.liveButton}
        <ButtonsGroup
          primary={{
            href: data.project.liveButton.url,
            text: data.project.liveButton.text,
            external: true
          }}
          secondary={{
            href: data.project.repositoryButton.url,
            text: data.project.repositoryButton.text,
            external: true
          }}
          size="small"
        />
      {:else}
        <Button
          size="small"
          variant="primary"
          href={data.project.repositoryButton.url}
          external
        >
          {data.project.repositoryButton.text}
        </Button>
      {/if}
    </div>
  </div>

  <Divider class="my-16 md:my-[104px]" />
  <RichContent content={data.project.content} />
  <Divider class="my-16 md:my-[104px]" />
</Post>
