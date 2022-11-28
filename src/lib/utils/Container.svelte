<script lang="ts">
  let className: string = '';
  export { className as class };
</script>

<div class={`w-4/5 max-w-[1120px] my-0 mx-auto ${className} `}>
  <slot />
</div>
