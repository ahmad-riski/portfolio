<script setup lang="ts">
	import Skills from './Skills.vue'
	import Contact from './Contact.vue'
	import Certifications from './Certifications.vue'
</script>

<template>
	<div class="grid grid-cols-1 gap-10 p-5 mt-10 ">

		<section class="flex justify-center 
		lg:flex-row lg:gap-10
		md:flex-row md:gap-15 md:m-auto
		sm:flex-col sm:gap-10 sm:max-w-max sm:m-5 sm:mt-100
		">
			<div>
				<img class="sm:w-50 md:w-20 lg:w-20" src="data:image/png;base64,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" alt="thinking-male--v1">
			</div>
			<div 
			class="max-w-2xl transition duration-300 h-100 rounded-2xl p-5 mb-20 overflow-x-hidden
			" 
			data-aos="fade"
			data-aos-duration="2000"
			>
				<h1 class="text-4xl font-light pb-5">Introduction</h1>
				<hr class="border-gray-600" />
				<p class="mt-5">Hello, let me introduce myself. I'm Ahmad Riski Fauzi, 17 years old. A passionate developer who loves to make aesthetic looking website with my creativity.</p>	

				<p class="mt-5">I always make my website with beautiful and intuitive UI's</p>
			</div>
		</section>

		<section class="lg:mt-0 md:mt-0 sm:mt-100">
			<Skills/>
		</section>

		<section class="flex justify-center
		lg:flex-row lg:gap-10
		lg:flex-row md:gap-10
		sm:flex-col sm:gap-10 sm:mt-100
		">
			<Certifications/>
		</section>

		<section class="flex justify-center pt-50
		lg:flex-row lg:gap-10
		lg:flex-row md:gap-10
		sm:flex-row sm:gap-10 sm:mt-100
		" id="contact"
		>			 
			<Contact/>
		</section>
	</div>
</template>

<style scoped>
</style>