<script setup lang="ts">
	import { RouterLink } from 'vue-router'	
</script>
<template>
	<nav class="
	fixed top-0 z-10

	sm:inline-grid sm:grid-cols-4 sm:text-[1.7em] sm:gap-5 sm:p-10 sm:items-center sm:right-0 sm:left-0 sm:shadow-2xl sm:rounded-b-2xl sm:bg-gray-800
	lg:inline-grid lg:grid-cols-4 lg:text-[1em] lg:bg-none lg:border-none lg:w-115 lg:shadow-none
	md:inline-grid md:grid-cols-4 md:text-[2em] md:bg-none md:border-none md:w-115 md:shadow-none
	">
		<a href="#" class="link">Home</a>
		<a href="#about" class="link">About</a>
		<a href="#contact" class="link">Contact</a>
		<RouterLink to="/projects" class="link lg:p-2 lg:bg-blue-700 lg:shadow-blue-600 lg:shadow-md lg:rounded-2xl">Projects</RouterLink>
	</nav>
</template>