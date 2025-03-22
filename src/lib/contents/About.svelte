<script>
	import { onMount } from 'svelte'
	onMount(() => document.title = "Portfolio - About" )
</script>

<div class="grid min-h-screen justify-center md:grid-cols-2 gap-10 pt-15">
	<article class="p-10 text-justify fade-left">
		<p class="text-3xl font-semibold">Introduction</p>
		<p class="mt-10">Elit est aliqua elit reprehenderit cillum tempor cillum adipisicing amet enim anim ad occaecat pariatur dolore exercitation fugiat est excepteur est proident proident laboris enim nostrud eiusmod nisi tempor amet.</p>
	</article>
	<img src="about.jpeg" class="md:rounded-l-2xl rounded-t-2xl h-full object-cover shadow fade-right">
</div>