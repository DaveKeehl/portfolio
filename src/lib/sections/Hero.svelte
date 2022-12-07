<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { reveal } from 'svelte-reveal';

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
    class="py-20 md:py-32 lg:py-[200px] overflow-hidden relative"
    id="welcome"
    bind:this={element}
  >
    <Container class="flex flex-col gap-12">
      <div class="flex flex-col gap-4">
        <p
          class="p1-semibold text-turquoise-200 w-fit bg-hero [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
          use:reveal
        >
          {greetings}
        </p>
        <h1 class="h1-bold text-shadow" use:reveal={{ delay: 100 }}>
          {heading.split(' ')[0]}{' '}<span class="relative stroke"
            >{heading.split(' ')[1]}<img
              src="/stroke.svg"
              alt="Turquoise colored paint stroke"
              class="absolute -z-[1] top-1/2 left-0 -translate-y-1/2 select-none scale-[1.7] origin-left"
            /></span
          >{' '}{heading.split(' ').slice(2).join(' ')}
        </h1>
      </div>
      <p
        class="p3-regular text-blue-100 max-w-[600px]"
        use:reveal={{ delay: 200 }}
      >
        {description}
      </p>
      <div class="button" use:reveal={{ delay: 300 }}>
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
