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

	// Selected section highlighted in navbar
	const selectedSection = ref('');
	// Section to scroll to after a nav click (cleared after scrolling)
	const scrollToSection = ref('');

	const setActiveSection = (section) => {
		selectedSection.value = section;
	};

	const requestScrollToSection = (section) => {
		selectedSection.value = section;
		scrollToSection.value = section;
	};

	const clearScrollToSection = () => {
		scrollToSection.value = '';
	};

	// Backwards-compatible alias used by older callers
	const setSelectedSection = requestScrollToSection;

	return {
		screenSize,
		selectedSection,
		scrollToSection,
		setActiveSection,
		requestScrollToSection,
		clearScrollToSection,
		setSelectedSection,
	};
});
