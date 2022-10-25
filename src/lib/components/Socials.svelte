<script lang="ts">
	import SanityImage from './SanityImage.svelte';

	import type { ISocial } from '$utils/lib';
	import { css } from '$utils/stitches.config';

	export let socials: ISocial[];

	const socialsStyles = css({
		display: 'flex',
		gap: '0.75rem'
	});

	const socialStyles = css({
		display: 'flex',
		transition: 'opacity 0.2s',

		'&:hover': {
			opacity: '0.8'
		}
	});
</script>

<div class={socialsStyles()}>
	{#each socials as social}
		<a
			href={social.url}
			target="_blank"
			rel="noopener noreferrer"
			class={socialStyles()}
		>
			<SanityImage src={social.icon.assetId} alt={social.title} />
		</a>
	{/each}
</div>
