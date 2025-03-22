<script>
	import { onMount } from 'svelte'
	import Svelte from '../../assets/svelte.svg'

	onMount(() => document.title = "Portfolio - Tech Stack" )
</script>

<div class="bg-cover grid min-h-screen justify-center items-center gap-10">
	<article class="p-10 text-center fade">
		<p class="text-3xl font-semibold">Tech Stack</p>
		<p class="mt-5 mb-5">Language, Framework & Tools i use to work with</p>
		<section class="grid grid-cols-4 md:grid-cols-4 items-center gap-10">
          <a href="https://nodejs.org/"><i class="devicon-nodejs-plain colored text-4xl md:text-5xl"></i></a>
          <a href="https://vitejs.dev/"><img src="vite.svg" class="h-11" /></a>
         
          <a href="https://tailwindcss.com/"><i class="devicon-tailwindcss-plain colored text-4xl md:text-5xl"></i></a>
          <a href="https://pnpm.io/"><i class="devicon-pnpm-plain colored text-3xl md:text-4xl"></i></a>
          <a href="https://solidjs.com/"><img src={Svelte} class="h-12" /></a>
          <a href="https://laravel.com/"><i class="devicon-laravel-plain colored text-4xl md:text-5xl"></i></a>
          <a href="https://java.com/"><i class="devicon-java-plain colored text-4xl md:text-5xl"></i></a>
          <a href="https://kotlinlang.org/"><i class="devicon-kotlin-plain colored text-4xl md:text-5xl"></i></a>
		</section>
		<hr class="border border-gray-600 mt-10">
	</article>
</div>