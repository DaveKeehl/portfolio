<script lang="ts">
  let className = '';
  export { className as class };
</script>

<div
  class={`absolute bottom-0 left-1/2 -z-[1] -translate-x-1/2 translate-y-1/2 w-[600px] aspect-square blur-circle opacity-25 rounded-full bg-blue-100 ${className}`}
/>

<style>
  div {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    transform: translate3d(-50%, 50%, 0);
    -webkit-transform: translate3d(-50%, 50%, 0);
    -moz-transform: translate3d(-50%, 50%, 0);
  }

  @supports (-moz-appearance: none) {
    div {
      opacity: 0.1;
      transform: translate3d(-50%, 50%, 0) scale(1.5);
      -webkit-transform: translate3d(-50%, 50%, 0) scale(1.5);
      -moz-transform: translate3d(-50%, 50%, 0) scale(1.5);
    }
  }
</style>
