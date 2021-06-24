<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */

	import Button from '$lib/atoms/Button.svelte';

	// export async function load({ page, fetch, session, context }) {
	// 	const url = `/blog/${page.params.slug}.json`;
	// 	const res = await fetch(url);

	// 	if (res.ok) {
	// 		return {
	// 			props: {
	// 				article: await res.json()
	// 			}
	// 		};
	// 	}

	// 	return {
	// 		status: res.status,
	// 		error: new Error(`Could not load ${url}`)
	// 	};
	// }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button />
