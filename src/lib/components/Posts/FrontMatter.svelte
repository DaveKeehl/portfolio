<script lang="ts">
  import { toPlainText } from '@portabletext/svelte';

  import BlurredCircle from '$components/BlurredCircle.svelte';
  import Label from '$components/Label.svelte';

  import readTime from '$utils/readTimeEstimate';

  export let _createdAt: string;
  export let content: any;
  export let title: string;
  export let label: string;

  $: createdAt = new Date(_createdAt);
  $: day = createdAt.getDate();
  $: month = createdAt.toLocaleString('default', { month: 'short' });
  $: date = `${day} ${month} ${createdAt.getFullYear()}`;

  $: estimatedReadDuration = readTime(toPlainText(content));
</script>

<div
  class="relative flex w-full flex-col border-b-[1px] border-b-blue-100/[4%]"
>
  <div
    class="flex w-full flex-col items-center gap-4 px-10 pt-16 pb-36 xs:pb-48 sm:pb-60 md:pt-24 md:pb-64 lg:pt-32 lg:pb-64"
  >
    <Label>{label}</Label>
    <h1 class="h2-bold md:h1-bold text-center">{title}</h1>
    <p class="p5-regular uppercase text-blue-100">
      {date} • {Math.ceil(estimatedReadDuration.duration)} MIN READ
    </p>
  </div>
  <BlurredCircle class="max-w-full" />
</div>
