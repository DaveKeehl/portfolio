<script lang="ts">
  let className = '';
  export { className as class };
</script>

<div class={`my-0 mx-auto w-10/12 max-w-[1120px] ${className} `}>
  <slot />
</div>
