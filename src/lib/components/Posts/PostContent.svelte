<script lang="ts">
  import SanityImage from '$components/SanityImage.svelte';

  import type { IImage } from '$utils/lib';

  export let maxWidth: number;
  export let image: IImage;
</script>

<div class="relative flex justify-center w-full bg-post">
  <div class="w-4/5" style={`max-width: ${maxWidth}px`}>
    <div
      class="overflow-hidden rounded-[20px] border border-turquoise-200/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-[700px]"
    >
      <SanityImage
        src={image.url}
        alt={image.alt}
        class="aspect-video object-cover hover:scale-[1.02] transition-transform"
      />
    </div>
    <div class="mt-[150px] mb-16 md:mb-[104px] xs:mt-[200px] sm:mt-60 md:mt-72">
      <slot />
    </div>
  </div>
</div>
