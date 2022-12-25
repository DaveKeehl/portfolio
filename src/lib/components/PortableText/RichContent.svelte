<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import InternalLink from './InternalLink.svelte';
  import Link from './Link.svelte';

  let className = '';

  export let content: any;
  export { className as class };
</script>

<div class={`rich-text text-left text-blue-100 ${className}`}>
  <PortableText
    value={content}
    components={{
      marks: {
        link: Link,
        internalLink: InternalLink
      }
    }}
  />
</div>

<style lang="scss" global>
  .rich-text {
    & > *:not(:last-child) {
      margin-bottom: 24px;
    }

    &:first-child {
      margin-top: 0;
    }

    & p {
      font-family: theme('fontFamily.body');
      font-size: theme('fontSize.p4');
      font-weight: theme('fontWeight.normal');
      line-height: 150%;
      letter-spacing: 0.02em;
      opacity: 0.9;
    }

    & a {
      color: theme('colors.turquoise.200');

      &:hover {
        color: theme('colors.turquoise.100');
      }
    }

    & h1,
    h2,
    h3,
    h4 {
      color: theme('colors.grayscale.100');
    }

    & h1:not(:first-child),
    h2:not(:first-child),
    h3:not(:first-child),
    h4:not(:first-child) {
      margin-block: 64px 32px;
    }

    & h1 {
      font-family: theme('fontFamily.heading');
      font-size: theme('fontSize.h1');
      font-weight: theme('fontWeight.bold');
      line-height: 120%;
    }

    & h2 {
      font-family: theme('fontFamily.heading');
      font-size: theme('fontSize.h2');
      font-weight: theme('fontWeight.bold');
      line-height: 140%;
    }

    & h3 {
      font-family: theme('fontFamily.heading');
      font-size: theme('fontSize.h3');
      font-weight: theme('fontWeight.bold');
      line-height: 150%;
    }
  }

  .post .rich-text a {
    text-decoration: underline;
  }
</style>
