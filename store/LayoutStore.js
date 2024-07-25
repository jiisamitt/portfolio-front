import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
	const screenSize = ref('');

	// Check the screen size
	const checkScreenSize = () => {
		if (window.innerWidth < 768) {
			screenSize.value = 'mobile';
		} else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
			screenSize.value = 'tablet';
		} else {
			screenSize.value = 'desktop';
		}
	};

	// Check everytime the window is resized
	const handleResize = () => {
		checkScreenSize();
	};

	onMounted(() => {
		checkScreenSize(); // Initial check
		window.addEventListener('resize', handleResize);
	});

	onUnmounted(() => {
		window.removeEventListener('resize', handleResize);
	});

	// Selected section
	const selectedSection = ref('home');

	const setSelectedSection = (section) => {
		selectedSection.value = section;
	};

	return {
		screenSize,
		selectedSection,
		setSelectedSection,
	};
});
