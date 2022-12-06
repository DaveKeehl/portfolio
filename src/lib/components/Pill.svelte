<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { cva } from 'cva';

  const dispatch = createEventDispatcher();

  export let text: string;
  export let selected = false;
  export let disabled = false;

  const pill = cva(
    [
      'p5-semibold',
      'bg-turquoise-100/10',
      'text-turquoise-200',
      'py-2',
      'px-5',
      'rounded-3xl',
      'select-none',
      'disabled:text-blue-200',
      'disabled:bg-turquoise-100/10',
      'disabled:cursor-not-allowed',
      'hover:cursor-pointer',
      'hover:text-turquoise-100',
      'focus:outline',
      'focus:outline-2',
      'focus:outline-turquoise-100/20',
      'pill-transition'
    ],
    {
      variants: {
        selected: {
          true: 'shadow-secondary-btn-focus'
        }
      }
    }
  );

  const handleClick = (event: MouseEvent) => {
    dispatch('click', { event });
  };

  const handleKeypress = (event: KeyboardEvent) => {
    dispatch('click', { event });
  };
</script>

<p
  class={pill({ selected })}
  on:click={handleClick}
  on:keypress={handleKeypress}
  {disabled}
>
  {text}
</p>
