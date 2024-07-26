<template>
	<span
		class="absolute bg-secondary bottom-6 left-[50%] transform -translate-x-1/2 border-2 border-slate-400 p-2 rounded-lg w-28 text-center"
	>
		<img :src="imageSrc" alt="Dynamic Image" />
		<p>{{ text }}</p>
	</span>
</template>

<script setup>
	import { computed } from 'vue';
	import { useRuntimeConfig } from '#app';

	// Get props from parent component
	const props = defineProps({
		image: String,
		text: String,
	});

	// Access the runtime configuration
	const config = useRuntimeConfig();

	// Computed property to dynamically construct image path
	const imageSrc = computed(() => {
		return `${config.public.baseURL}assets/${props.image}`;
	});
</script>
