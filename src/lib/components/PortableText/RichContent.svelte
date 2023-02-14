<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import Code from './Code.svelte';
  import Image from './Image.svelte';
  import InlineCode from './InlineCode.svelte';
  import InternalLink from './InternalLink.svelte';
  import Link from './Link.svelte';
  import NormalListItem from './NormalListItem.svelte';

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
        internalLink: InternalLink,
        inlineCode: InlineCode
      },
      listItem: {
        normal: NormalListItem
      },
      types: {
        image: Image,
        code: Code
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

    & li {
      font-family: theme('fontFamily.body');
      font-size: theme('fontSize.p4');
      font-weight: theme('fontWeight.normal');
      line-height: 150%;
      letter-spacing: 0.02em;
      opacity: 0.9;
      padding-left: 2px;

      &:not(:last-child) {
        margin-bottom: 8px;
      }
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

    & ul,
    & ol {
      list-style-position: outside;
    }

    & ol {
      list-style: decimal;
      margin-left: 32px;
    }

    & ul {
      list-style: disc;
      margin-left: 20px;
    }

    & figure {
      img {
        margin: 0 auto 0.5rem;
      }

      figcaption {
        text-align: center;
        font-family: theme('fontFamily.body');
        font-size: theme('fontSize.p5');
        font-weight: theme('fontWeight.normal');
        line-height: 150%;
        letter-spacing: 0.02em;
        opacity: 0.9;
      }
    }

    & code {
      border-radius: 1rem;
      border: white;
      padding: 1.5rem !important;
      border: 1px solid hsl(207deg 45% 13%);
    }
  }

  .post .rich-text a {
    text-decoration: underline;
  }
</style>
