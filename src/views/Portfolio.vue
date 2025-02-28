<script setup lang="ts">
	import { ref, onBeforeMount } from 'vue'
	import AOS from 'aos'
	import 'aos/dist/aos.css'

	import About from '../components/About.vue'
	import Contact from '../components/Contact.vue'
	import Navbar from '../components/Navbar.vue'
	import WhatsappIcons from '../components/WhatsappIcons.vue'
	import Card3D from '../components/Card3D.vue'

	const name = ref('Ahmad Riski Fauzi')
	const jobs = ref('Student, Illustrator, Web Developer, Game Developer')

	onBeforeMount(() => {
		document.title = 'Portfolio - Ahmad Riski Fauzi'
		AOS.init()
	})

</script>

<template>
	<div class="bg-gradient-to-l from-indigo-300 to-gray-900 lg:pt-30 md:pt-75 sm:pt-30">
		<header 
			id="navbar" 
			class="inline"
		>
			<Navbar/>
		</header>
		<WhatsappIcons
			link="https://wa.me/62895800692253"
			class="
			fixed h-15 transition duration-120 hover:scale-110 animate-pulse z-10
			lg:bottom-10 lg:right-10 
			md:bottom-10 md:right-10
			sm:bottom-150 sm:right-10 sm:h-20	
		"/>
		<div 
			id="main" 
			class="
			rotate-x-[10deg] rotate-y-[-20deg]

			lg:flex lg:justify-evenly lg:flex-row lg:m-20
			md:flex md:justify-evenly md:flex-row
			sm:flex sm:justify-center sm:flex-col-reverse sm:text-center sm:gap-10 sm:mt-100
		">
			<section 
				data-aos="fade-down"
				data-aos-duration="2000"
			>
				<h1 class="text-6xl text-white font-extralight">
					{{ name }}
				</h1>
				<p class="text-gray-200">{{ jobs }}</p>
			</section>
			<section
				data-aos="fade-up"
				data-aos-duration="2000"
				class="sm:m-auto"
			>
				<img 
					src="../assets/foto.jpg" 
					class="rounded-2xl shadow-[0_0_25px_10px] shadow-gray-300 
					md:img
					sm:img"
				>
			</section>
		</div>
		<div 
			id="about"
			class="mt-15 pt-[5em] bg-gradient-to-t from-gray-700 to-gray-800 bg-gray-800 shadow-[0_0_100px_100px] shadow-gray-800 grid-cols-2 pb-100
			" 
		>
			<About/>
		</div>
		<footer 
			class="flex bg-blue-900 p-3 border-t border-indigo-500 shadow-[0_20px_25px_1px] shadow-indigo-400 pb-[5em] bg-gradient-to-br from-gray-800 to-transparent p-20" 
		>

		<div>
			<p class="text-gray-500 mb-3">created with</p>
			<div class="grid grid-cols-4 w-[20em] gap-[2em] mb-20">
				<img src="../assets/logo.svg" class="h-10">

	            <svg viewBox="0 0 128 128" class="h-10">
	            <defs><linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"></stop><stop offset="1" stop-color="#bd34fe"></stop></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffea83"></stop><stop offset=".083" stop-color="#ffdd35"></stop><stop offset="1" stop-color="#ffa800"></stop></linearGradient></defs><path fill="url(#a)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"></path><path fill="url(#b)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"></path>
	            </svg>    


	            <svg viewBox="0 0 128 128" class="h-10">
	            <path fill="#f8ab00" d="M0 .004V40h39.996V.004Zm43.996 0V40h40V.004Zm44.008 0V40H128V.004Zm0 43.996v39.996H128V44Z"></path><path fill="#4c4c4c" d="M43.996 44v39.996h40V44ZM0 87.996v40h39.996v-40Zm43.996 0v40h40v-40Zm44.008 0v40H128v-40Z"></path>
	            </svg>


	            <svg viewBox="0 0 128 128" class="h-11">
	            <path fill="#5fa04e" d="M63.999 0a5.617 5.617 0 0 0-2.789.744L11.445 29.646 28.852 61.58 64.592.053A8.177 8.177 0 0 0 64.003 0Zm2.316.605v.002l35.194 60.577 16.545-30.449a5.483 5.483 0 0 0-1.028-.817L91.38 15.024 66.7.754h-.007c-.12-.061-.252-.099-.378-.15Zm-1.024.248L29.417 62.616l35.579 65.278c.1-.02.198-.023.297-.05l35.653-65.624ZM10.586 30.176c-1.502 1.031-2.35 2.752-2.35 4.595v58.478c0 .93.254 1.838.684 2.645l19.34-33.293Zm108.161 1.4-16.643 30.629 17.66 30.398V34.77c0-1.15-.382-2.265-1.017-3.195zm-17.204 31.667-34.808 64.062.055-.028 50.243-29.183.004-.002c1.402-.793 2.3-2.155 2.604-3.693zm-72.718.394L9.545 96.832c.406.5.885.936 1.43 1.266l.001.004 49.702 28.866.53.305.006.002h.002c.257.151.528.266.798.372.144.054.288.104.433.146.125.037.251.062.376.089.242.051.483.088.727.108.118.01.237.01.355.01z"></path>
	            </svg>
	          
			</div>
			<p class="text-2xl text-gray-300">ahmadprogrammin9@gmail.com</p>
		</div>
		</footer>
	</div>
</template>
