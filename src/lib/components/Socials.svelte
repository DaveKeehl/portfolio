<script lang="ts">
  import SanityImage from './SanityImage.svelte';
  import type { ISocial } from '$utils/lib';

  export let socials: ISocial[];
</script>

<div class="flex gap-3">
  {#each socials as social}
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      class="flex hover:opacity-80 transition-opacity"
    >
      <SanityImage src={social.icon.assetId} alt={social.title} />
    </a>
  {/each}
</div>
