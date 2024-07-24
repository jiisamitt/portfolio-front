<template>
	<div ref="main" class="h-screen flex flex-col justify-center px-32">
		<p class="text-slate-400 text-2xl font-mono">Hey, my name is</p>
		<h1 class="mt-3 text-6xl font-semibold text-slate-200">Juan Isamitt</h1>
		<!--
		<h2 class="mt-3 text-lg text-slate-200">Software Engineer</h2>
		-->
		<h2 class="mt-4 text-3xl text-slate-300 w-4/5 font-semibold">
			I create seamless, dynamic, and powerful web solutions as a
			<span class="text-primary text-nowrap">full-stack engineer</span>.
		</h2>
		<button
			class="px-4 py-2 mt-10 text-slate-200 rounded-lg border-2 w-fit font-mono my-button transition duration-500"
			@click="downloadResume()"
		>
			Check Resume
		</button>
	</div>
	<About class="py-60" id="about" />
	<Experience class="py-60 mx-32" id="experience" />
	<Contact class="pt-40 pb-40" id="contact" />
</template>

<script setup>
	import About from '../sections/About.vue';
	import Experience from '../sections/Experience.vue';
	import Contact from '../sections/Contact.vue';
	import resume from '@/assets/resume.pdf';
	import { useLayoutStore } from '../store/LayoutStore';
	import { watch, onMounted, ref } from 'vue';

	// Download resume from assets
	const downloadResume = () => {
		const link = document.createElement('a');
		link.href = resume;
		link.download = 'Juan_Isamitt_Resume.pdf';
		link.click();
	};

	const layoutStore = useLayoutStore();
	watch(
		() => layoutStore.selectedSection,
		(newVal) => {
			if (newVal) {
				scrollToSection(newVal);
			}
		}
	);

	// On click, scroll to section
	const scrollToSection = (section) => {
		const el = document.getElementById(section);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// Constantly check on what section the user is
	/*
	const main = ref(null);
	const checkSection = () => {
		const rect = main.value.getBoundingClientRect();
		const y = rect.top;
		// If its in about, set active section to about
		const aboutEl = document
			.getElementById('about')
			.getBoundingClientRect().top;
		const experienceEl = document
			.getElementById('experience')
			.getBoundingClientRect().top;
		//const projectsEl = document
		//	.getElementById('projects')
		//	.getBoundingClientRect().top;
		const contactEl = document
			.getElementById('contact')
			.getBoundingClientRect().top;
		if (-y >= aboutEl + 400) {
			layoutStore.setSelectedSection('about');
		}
		if (-y >= experienceEl + 400) {
			layoutStore.setSelectedSection('experience');
		}
		if (-y >= contactEl + 400) {
			layoutStore.setSelectedSection('contact');
		}
	};
	*/

	// On mounted, scroll should be on top
	onMounted(() => {
		window.scrollTo(0, 0);
		//window.addEventListener('scroll', checkSection);
	});
</script>
<style>
	.my-button:hover {
		border-color: #be92b7;
		color: #be92b7;
	}
	.my-button:active {
		background-color: #be92b7;
		color: #1a202c;
	}
	.my-button-blocked {
		background-color: #be92b7;
		color: #1a202c;
		/* pointer */
		cursor: auto;
		pointer-events: none;
	}
</style>