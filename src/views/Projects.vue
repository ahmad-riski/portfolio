<script setup lang="ts">
	import { onBeforeMount } from 'vue'
	import { RouterLink } from 'vue-router'

	onBeforeMount(() => {
		document.title = 'Projects - Ahmad Riski Fauzi'
	})
</script>

<template>
	<div id="main" class="m-10">
		<RouterLink to="/">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:h-5 md:h-5 sm:h-10">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
			</svg>
		</RouterLink>
		<section class="mt-10">
			<h1
				class="lg:text-4xl font-extralight sm:text-6xl" 
				data-aos="fade" 
				data-aos-duration="2000"
			>
				My Latest Project
			</h1>
		</section>
		<section class="m-10">
			<p class="lg:text-[1em] md:text-[1em] sm:text-3xl">coming soon</p>
		</section>
	</div>
</template>
