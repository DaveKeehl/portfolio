<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import Section from '$lib/utils/Section.svelte';
  import RichContent from '$components/RichContent.svelte';

  import type { IContact } from '$utils/lib';
  import { section } from '$utils/stores';

  export let contact: IContact;
  const { heading, content } = contact;

  let element: HTMLElement;
</script>

<IntersectionObserver {element} on:intersect={() => section.set('contact')}>
  <div bind:this={element}>
    <Section id="contact" {heading} headingGap="small" icon="ChatTeardropDots">
      <RichContent class="rich-text-contact" {content} />
    </Section>
  </div>
</IntersectionObserver>

<style lang="scss" global>
  .rich-text-contact {
    a {
      display: block;
      font-family: theme('fontFamily.code');
      font-size: theme('fontSize.p4');
      font-weight: 700;
      line-height: 150%;
      width: fit-content;
      margin-top: 20px;
    }
  }
</style>
