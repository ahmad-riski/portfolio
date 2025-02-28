<script setup>
	import Card3D from './Card3D.vue'
</script>

<template>
	<div class="flex sm:m-auto gap-10">

		<section>
			<h1 class="text-4xl">Certifications</h1>

			<hr class="border-gray-600 mt-10 mb-10" />
			<Card3D max-rotation="6">
				<img 
					data-aos="zoom"
					data-aos-duration="3000"
					class="h-100 rounded-2xl shadow-2xl" 
					src="../assets/certificate1.png">
			</Card3D>
		</section>
	</div>
</template>