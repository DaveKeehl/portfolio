<script lang="ts">
  let className: string = '';
  export { className as class };
</script>

<div class={`w-10/12 max-w-[1120px] my-0 mx-auto ${className} `}>
  <slot />
</div>
