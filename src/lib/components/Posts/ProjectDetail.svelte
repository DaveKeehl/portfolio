<script lang="ts">
  export let title: string;
</script>

<div>
  <p class="p4-medium mb-[2px] text-blue-100 opacity-60">{title}</p>
  <p class="p4-semibold whitespace-pre-wrap text-grayscale-100">
    <slot />
  </p>
</div>
