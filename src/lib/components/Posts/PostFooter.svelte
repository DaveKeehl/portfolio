<script lang="ts">
  import Footer from '$lib/sections/Footer.svelte';

  import type { IFooter } from '$utils/lib';

  export let footer: IFooter;
  export let maxWidth: number;
</script>

<div class="my-0 mx-auto w-10/12" style={`max-width: ${maxWidth}px`}>
  <Footer {footer} />
</div>
