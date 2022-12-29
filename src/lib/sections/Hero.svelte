<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import BlurredCircle from '$components/BlurredCircle.svelte';
  import ButtonsGroup from '$lib/components/ButtonsGroup.svelte';
  import Container from '$lib/utils/Container.svelte';

  import type { IHero } from '$utils/lib';
  import { section } from '$utils/stores';

  export let hero: IHero;
  const { heading, greetings, buttons, description } = hero;

  let element: HTMLElement | undefined;

  const onClick = (event: any, sectionName: string) => {
    event.detail.event.detail.event.preventDefault();
    document.querySelector(`#${sectionName}`)?.scrollIntoView({
      behavior: 'smooth'
    });
    window.history.pushState({ section: sectionName }, '', `#${sectionName}`);
  };
</script>

<IntersectionObserver
  {element}
  on:intersect={() => {
    if (window.location.pathname === '/') section.set('welcome');
  }}
  threshold={0.5}
>
  <section
    class="relative overflow-hidden py-20 md:py-32 lg:py-[200px]"
    id="welcome"
    bind:this={element}
  >
    <Container class="flex flex-col gap-12">
      <div class="flex flex-col gap-4">
        <p
          class="p1-semibold w-fit bg-hero text-turquoise-200 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
        >
          {greetings}
        </p>
        <h1 class="h1-bold text-shadow">
          {heading.split(' ')[0]}{' '}<span class="stroke relative"
            >{heading.split(' ')[1]}<img
              src="/stroke.svg"
              alt="Turquoise colored paint stroke"
              class="absolute top-1/2 left-0 -z-[1] origin-left -translate-y-1/2 scale-[1.7] select-none"
            /></span
          >{' '}{heading.split(' ').slice(2).join(' ')}
        </h1>
      </div>
      <p class="p3-regular max-w-[600px] text-blue-100">
        {description}
      </p>
      <div class="button">
        <ButtonsGroup
          size="large"
          primary={{
            text: buttons.primary,
            href: `#projects`,
            external: false
          }}
          secondary={{
            text: buttons.secondary,
            href: `#contact`,
            external: false
          }}
          on:click-primary={(e) => onClick(e, 'projects')}
          on:click-secondary={(e) => onClick(e, 'contact')}
        />
      </div>
    </Container>
    <BlurredCircle />
  </section>
</IntersectionObserver>
