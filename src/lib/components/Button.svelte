<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { cva } from 'cva';

  const dispatch = createEventDispatcher();

  type Variant = 'primary' | 'secondary';
  type Size = 'small' | 'large';

  let className = '';

  export let href: string | undefined = undefined;
  export let external = false;
  export let variant: Variant = 'primary';
  export let size: Size = 'small';
  export let disabled = false;
  export { className as class };
  export let style = '';

  const handleClick = (event: MouseEvent) => {
    dispatch('click', {
      event
    });
  };

  const cvaButton = cva(
    [
      'flex',
      'justify-center',
      'items-center',
      'gap-[10px]',
      'rounded-[10px]',
      'h-fit',
      'text-center',
      'w-full',
      'border',
      'border-turquoise-200/5',
      'transition',
      'md:w-max'
    ],
    {
      variants: {
        intent: {
          primary: [
            'bg-turquoise-200',
            'text-blue-300',
            'hover:bg-turquoise-100',
            'focus:outline-0',
            'focus:shadow-primary-btn-focus',
            'disabled:bg-grayscale-100',
            'disabled:text-blue-200'
          ],
          secondary: [
            'bg-turquoise-100/10',
            'backdrop-blur-[40px]',
            'text-turquoise-200',
            'hover:text-turquoise-100',
            'active:bg-turquoise-100/20',
            'active:text-turquoise-100',
            'focus:outline-0',
            'focus:shadow-secondary-btn-focus',
            'disabled:bg-grayscale-100',
            'disabled:text-blue-200'
          ]
        },
        size: {
          small: [
            'text-[18px]',
            'font-semibold',
            'leading-[27px]',
            'py-[10px]',
            'px-[20px]'
          ],
          large: [
            'text-[20px]',
            'font-bold',
            'leading-[30px]',
            'py-[12px]',
            'px-[20px]'
          ]
        }
      }
    }
  );
</script>

{#if href}
  <a
    {href}
    rel={external ? 'noopener noreferrer' : ''}
    target={external ? '_blank' : ''}
    {disabled}
    class={`${className} button ${cvaButton({ intent: variant, size })}`.trim()}
    {style}
    on:click={handleClick}
  >
    <slot />
  </a>
{:else}
  <button
    class={`${className} button ${cvaButton({ intent: variant, size })}`.trim()}
    {style}
    {disabled}
    on:click
  >
    <slot />
  </button>
{/if}
