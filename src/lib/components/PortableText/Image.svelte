<script lang="ts">
  import SanityImage from '$components/SanityImage.svelte';
  import type { MarkComponentProps } from '@portabletext/svelte';
  import { client } from '$utils/sanity';
  import imageUrlBuilder from '@sanity/image-url';

  export let portableText: MarkComponentProps<{
    type: string;
    asset: {
      _ref: string;
    };
    altText: string;
    caption: string;
    maxWidth: number;
  }>;

  const builder = imageUrlBuilder(client);

  function urlFor(source: string) {
    return builder.image(source);
  }
</script>

<figure>
  <img
    src={urlFor(portableText.value.asset._ref).url()}
    alt={portableText.value.altText}
    style="max-width: {portableText.value.maxWidth}px"
  />
  <figcaption>{portableText.value.caption}</figcaption>
</figure>
