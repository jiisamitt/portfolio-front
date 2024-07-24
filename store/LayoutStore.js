import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useLayoutStore = defineStore('layout', () => {
	//const isMobile = ref(false)
	const selectedSection = ref('home');

	const setSelectedSection = (section) => {
		selectedSection.value = section;
	};

	return {
		selectedSection,
		setSelectedSection,
	};
});
