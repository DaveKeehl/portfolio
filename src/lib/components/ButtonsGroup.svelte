<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Button from '$lib/components/Button.svelte';

  import type { IButton } from '$utils/lib';

  export let primary: IButton;
  export let secondary: IButton;
  export let size: 'small' | 'large';

  const dispatch = createEventDispatcher();

  const onClickPrimary = (event: CustomEvent<MouseEvent>) => {
    dispatch('click-primary', {
      event
    });
  };

  const onClickSecondary = (event: CustomEvent<MouseEvent>) => {
    dispatch('click-secondary', {
      event
    });
  };
</script>

<div class="button-group">
  <div class="grid grid-cols-1 gap-4 md:flex">
    <Button
      variant="primary"
      {size}
      href={primary.href}
      external={primary.external}
      on:click={onClickPrimary}
    >
      {primary.text}
    </Button>
    <Button
      variant="secondary"
      {size}
      href={secondary.href}
      external={secondary.external}
      on:click={onClickSecondary}
    >
      {secondary.text}
    </Button>
  </div>
</div>
