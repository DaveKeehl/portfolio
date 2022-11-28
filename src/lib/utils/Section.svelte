<script lang="ts">
  import Container from '$lib/utils/Container.svelte';
  import Icon from '$lib/components/Icon.svelte';

  let className: string = '';
  export let heading: string;
  export let headingGap: 'small' | 'large';
  export { className as class };
  export let id: string = '';
  export let icon: 'Fire' | 'HandWaving' | 'Quotes' | 'ChatTeardropDots';

  const marginBottom = headingGap === 'small' ? 'mb-10' : 'mb-20';
</script>

<section {id} class={`${className}`.trim()}>
  <Container>
    <div
      class={`flex flex-col items-start gap-5 ${marginBottom} md:gap-8 md:flex-row md:items-center`}
    >
      <Icon name={icon} size={48} color="#EEF2F6" />
      <h2 class="h2-bold">{heading}</h2>
    </div>
    <div class="md:pl-20">
      <slot />
    </div>
  </Container>
</section>
