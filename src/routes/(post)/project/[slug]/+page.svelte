<script lang="ts">
  import ButtonsGroup from '$components/ButtonsGroup.svelte';
  import RichContent from '$components/RichContent.svelte';
  import Divider from '$components/Posts/Divider.svelte';
  import ProjectDetail from '$components/Posts/ProjectDetail.svelte';
  import Post from '$pages/Post.svelte';

  import type { PageData } from './$types';
  import { css } from '$utils/stitches.config';
  import { map } from 'lodash';

  export let data: PageData;

  $: post = {
    siteSettings: data.siteSettings,
    header: data.header,
    footer: data.footer,
    title: data.project.title,
    _createdAt: data.project._createdAt,
    image: data.project.image,
    content: data.project.content,
    relatedPosts: data.relatedPosts
  };

  const introStyles = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '64px',

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

<Post {...post} label="CASE STUDY">
  <div class={introStyles()}>
    <div class={detailsStyles()}>
      <ProjectDetail title="Project type">{data.project.type}</ProjectDetail>
      <ProjectDetail title="Year">{data.project.year}</ProjectDetail>
      <ProjectDetail title="Roles">
        {data.project.roles.join(', ')}
      </ProjectDetail>
      <ProjectDetail title="Technologies">
        {data.project.technologies.map((tech) => tech.title).join(', ')}
      </ProjectDetail>
    </div>

    <div class={nutshellBlockStyles()}>
      <h2 class={nutshellStyles()}>In a nutshell</h2>
      <RichContent content={data.project.nutshell} />
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
    </div>
  </div>

  <Divider class={dividerStyles()} />
  <RichContent content={data.project.content} />
  <Divider class={dividerStyles()} />
</Post>
