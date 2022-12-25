<script lang="ts">
  import { reveal } from 'svelte-reveal';
  import RichContent from '$components/PortableText/RichContent.svelte';
  import type { IFooter } from '$utils/lib';

  export let footer: IFooter;
  const { content } = footer;
</script>

<footer
  use:reveal
  class="relative pt-10 pb-14 before:absolute before:top-0 before:h-px before:w-[50px] before:bg-blue-200 before:content-[''] md:pb-20"
>
  <RichContent class="rich-text-footer" {content} />
</footer>

<style lang="scss" global>
  .rich-text-footer {
    & > *:not(:last-child) {
      margin-bottom: 0 !important;
    }

    & p {
      font-family: theme('fontFamily.body');
      font-size: theme('fontSize.p5');
      font-weight: theme('fontWeight.normal');
      line-height: 150%;
      letter-spacing: 0.02em;
    }

    & p:last-child {
      line-height: 20px;
    }

    @media (min-width: 531px) {
      & p:last-child {
        line-height: 10px;
      }
    }

    & a {
      font-family: theme('fontFamily.body');
      font-size: theme('fontSize.p5');
      font-weight: theme('fontWeight.semibold');
      line-height: 150%;
      letter-spacing: 0.02em;
    }
  }
</style>
