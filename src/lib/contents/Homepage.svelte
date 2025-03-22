<script>
	import { onMount } from 'svelte'
	onMount(() => document.title = "Portfolio - Ahmad Riski Fauzi" )
</script>

<div class="grid min-h-screen md:grid-cols-2">
	<img src="Alya.jpeg" class="h-full shadow-xl object-cover fade-left md:rounded-none rounded-b-2xl">
	<article class="md:p-30 p-15 fade-down">
		<p class="text-5xl mb-5 font-semibold">Hello, I'm Ahmad Riski Fauzi</p>
		<!-- <p class="border border-gray-600"></p> -->
		<p class="mt-5">I like to make websites and drawing</p>
	</article>
</div>