<script lang="ts">
  import { client } from '$utils/sanity';
  import imageUrlBuilder from '@sanity/image-url';
  import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

  let className = '';
  export { className as class };
  export let src: string;
  export let alt = '';
  export let transform:
    | ((builder: ImageUrlBuilder) => ImageUrlBuilder)
    | undefined = undefined;
  export let loading: 'eager' | 'lazy' | undefined = undefined;

  const builder = imageUrlBuilder(client);

  function urlFor(source: string) {
    return builder.image(source);
  }

  $: url = transform ? transform(urlFor(src)).url() : urlFor(src).url();
</script>

<img src={url} {alt} class={className} {loading} />
