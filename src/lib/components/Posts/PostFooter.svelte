<script lang="ts">
  import Footer from '$lib/sections/Footer.svelte';

  import type { IFooter } from '$utils/lib';

  export let footer: IFooter;
  export let maxWidth: number;
</script>

<div class="w-10/12 my-0 mx-auto" style={`max-width: ${maxWidth}px`}>
  <Footer {footer} />
</div>
