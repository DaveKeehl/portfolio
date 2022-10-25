<script lang="ts">
	import { getHostname } from '$utils/functions';
	import type { ISection } from '$utils/lib';
	import { css } from '$utils/stitches.config';
	import { section } from '$utils/stores';

	export let sections: ISection[];

	const prefix: string = getHostname();
	const getHref = (sectionName: string) => `${prefix}#${sectionName}`;

	const navStyles = css({
		display: 'flex',
		gap: '1.5rem'
	});

	const navItemStyles = css({
		display: 'flex',
		color: '$blue-200',
		fontSize: '$p5',
		fontWeight: '600',
		lineHeight: '24px',
		letterSpacing: '2%',
		textTransform: 'uppercase',
		transition: 'color 0.2s',

		'&:hover': {
			color: '$grayscale-100'
		},

		'&.active': {
			color: '$grayscale-100'
		}
	});

	$: currentSection = $section;
</script>

<nav class={navStyles()}>
	{#each sections as section}
		<a
			href={getHref(section.name.toLowerCase())}
			class={navItemStyles()}
			class:active={currentSection === section.name.toLowerCase()}
			>{section.name}</a
		>
	{/each}
</nav>
