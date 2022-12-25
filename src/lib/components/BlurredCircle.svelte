<script lang="ts">
  let className = '';
  export { className as class };
</script>

<div
  class={`absolute bottom-0 left-1/2 -z-[1] aspect-square w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-100 opacity-25 blur-circle ${className}`}
/>

<style>
  div {
    backface-visibility: hidden;
    transform: translate3d(-50%, 50%, 0);
  }

  @supports (-moz-appearance: none) {
    div {
      opacity: 0.1;
      transform: translate3d(-50%, 50%, 0) scale(1.5);
    }
  }
</style>
