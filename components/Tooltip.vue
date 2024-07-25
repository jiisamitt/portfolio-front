<template>
	<div class="relative" @mouseenter="showTooltip" @mouseleave="hideTooltip">
		<slot></slot>
		<div
			v-if="isVisible"
			class="absolute bg-secondary text-white text-sm rounded px-2 py-1 z-10"
			:style="tooltipStyle"
		>
			<slot name="tooltip"></slot>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';

	const props = defineProps({
		position: {
			type: String,
			default: 'bottom',
		},
	});

	const isVisible = ref(false);

	const showTooltip = () => {
		isVisible.value = true;
	};

	const hideTooltip = () => {
		isVisible.value = false;
	};

	const tooltipStyle = computed(() => {
		switch (props.position) {
			case 'top':
				return {
					bottom: '100%',
					left: '50%',
					transform: 'translateX(-50%)',
					marginBottom: '0.5rem',
				};
			case 'right':
				return {
					top: '50%',
					left: '100%',
					transform: 'translateY(-50%)',
					marginLeft: '0.5rem',
				};
			case 'bottom':
				return {
					top: '100%',
					left: '50%',
					transform: 'translateX(-50%)',
					marginTop: '0.5rem',
				};
			case 'left':
				return {
					top: '50%',
					right: '100%',
					transform: 'translateY(-50%)',
					marginRight: '0.5rem',
				};
			default:
				return {
					top: '100%',
					left: '50%',
					transform: 'translateX(-50%)',
					marginTop: '0.5rem',
				};
		}
	});
</script>

<style scoped>
	.tooltip {
		@apply absolute bg-gray-800 text-white text-sm rounded px-2 py-1 z-10;
	}
</style>
