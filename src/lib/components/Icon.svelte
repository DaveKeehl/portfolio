<script lang="ts">
  import { Fire, HandWaving, Quotes, ChatTeardropDots } from 'phosphor-svelte';
  import type { Weight } from 'phosphor-svelte/lib/shared';

  export let name: 'Fire' | 'HandWaving' | 'Quotes' | 'ChatTeardropDots';
  export let size: number;
  export let color: string;

  const icons = {
    Fire: Fire,
    HandWaving: HandWaving,
    Quotes: Quotes,
    ChatTeardropDots: ChatTeardropDots
  };

  const weights: { [key: string]: Weight } = {
    Fire: 'bold',
    HandWaving: 'regular',
    Quotes: 'fill',
    ChatTeardropDots: 'bold'
  };
</script>

<svelte:component this={icons[name]} {size} weight={weights[name]} {color} />
