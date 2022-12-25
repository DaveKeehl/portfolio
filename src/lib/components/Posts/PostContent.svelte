<script lang="ts">
  import SanityImage from '$components/SanityImage.svelte';

  import type { IImage } from '$utils/lib';

  export let maxWidth: number;
  export let image: IImage;
</script>

<div class="post relative flex w-full justify-center bg-post">
  <div class="w-10/12" style={`max-width: ${maxWidth}px`}>
    <div
      class="absolute top-0 left-1/2 flex w-10/12 max-w-[700px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[20px] border border-turquoise-200/5 lg:max-w-[700px]"
    >
      <SanityImage
        src={image.url}
        alt={image.alt}
        class="aspect-video object-cover transition-transform hover:scale-[1.02]"
      />
    </div>
    <div
      class="mt-[150px] mb-16 xs:mt-[200px] sm:mt-60 md:mt-64 md:mb-[104px] lg:mt-64"
    >
      <slot />
    </div>
  </div>
</div>
