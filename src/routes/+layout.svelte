<script lang="ts">
  import { globalCss } from '$utils/stitches.config';
  import '../styles/global.css';

  const globalStyles = globalCss({
    '*': {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',

      '&::selection': {
        background: '$turquoise-200-A40',
        color: '$blue-100'
      }
    },

    html: {
      scrollBehavior: 'smooth'
      // scrollPaddingTop: '50px'
    },

    body: {
      background: '$blue-400',
      color: '$grayscale-100',
      fontSize: '16px',
      fontFamily: '"Inter", sans-serif',
      fontFeatureSettings: "'salt' on",
      textRendering: 'optimizeLegibility',
      '-webkit-font-smoothing': 'antialiased',
      cursor: 'url(/cursor.svg), default'
    },

    a: {
      textDecoration: 'none',
      color: 'inherit'
    },

    button: {
      border: 0,

      '&:hover': {
        cursor: 'pointer'
      }
    }
  });

  globalStyles();
</script>

<slot />
