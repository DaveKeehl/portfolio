<script lang="ts">
	export let imagePath: string;
	export let imageAlt: string;
	export let title: string;
	export let category: string;
	export let excerpt: string;
</script>

<img src={imagePath} alt={imageAlt} />
<h5>{category}</h5>
<h3>{title}</h3>
<p>{excerpt}</p>
