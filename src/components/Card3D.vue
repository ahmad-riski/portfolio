<script setup lang="ts">
	import { ref, computed } from 'vue'
	import { useMouseInElement } from '@vueuse/core'


	const props = defineProps([
		'class',
		'max-rotation',
	])
	const target = ref(null)
	const { 
		elementX,
		elementY, 
		isOutside, 
		elementHeight, 
		elementWidth 
	} = useMouseInElement(target)

	const cardTransform = computed(() => {
		props.maxRotation

		const rX = (
			props.maxRotation / 2 -
			(elementY.value / elementHeight.value) * props.maxRotation
		).toFixed(2) // handle X-axis

		const rY = (
			props.maxRotation / 2 -
			(elementX.value / elementWidth.value) * props.maxRotation - props.maxRotation / 2
		).toFixed(2)  // handle Y-axis

		return isOutside.value
			? 'transition 1s ease'
			: `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg) `
	})
</script>


<template>
	<div
		ref="target"
		:class="props.class"
		:style="{
			transition: 'transition 2s ease-in',
			transform: cardTransform,
		}"
	>
		<slot/>
	</div>
</template>