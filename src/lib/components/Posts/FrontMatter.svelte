<script lang="ts">
  import { toPlainText } from '@portabletext/svelte';

  import BlurredCircle from '$components/BlurredCircle.svelte';
  import Label from '$components/Label.svelte';

  import readTime from '$utils/readTimeEstimate';

  export let _createdAt: string;
  export let content: any;
  export let title: string;
  export let label: string;

  const createdAt = new Date(_createdAt);
  const day = createdAt.getDate();
  const month = createdAt.toLocaleString('default', { month: 'short' });
  const date = `${day} ${month} ${createdAt.getFullYear()}`;

  const estimatedReadDuration = readTime(toPlainText(content));
</script>

<div class="relative flex flex-col w-full">
  <div
    class="flex flex-col items-center gap-4 px-10 pt-24 pb-36 xs:pb-40 w-full sm:pb-60 md:pb-64 lg:pt-32"
  >
    <Label>{label}</Label>
    <h1 class="h1-bold text-center">{title}</h1>
    <p class="p5-regular text-blue-100 uppercase">
      {date} • {Math.ceil(estimatedReadDuration.duration)} MIN READ
    </p>
  </div>
  <BlurredCircle class="max-w-full" />
</div>
