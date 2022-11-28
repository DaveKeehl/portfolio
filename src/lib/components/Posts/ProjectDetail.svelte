<script lang="ts">
  export let title: string;
</script>

<div>
  <p class="p4-medium text-blue-100 opacity-60 mb-[2px]">{title}</p>
  <p class="p4-semibold text-grayscale-100 whitespace-pre-wrap">
    <slot />
  </p>
</div>
