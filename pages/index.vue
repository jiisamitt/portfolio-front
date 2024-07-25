<template>
	<div
		ref="main"
		class="h-screen flex flex-col justify-center hide mb-2"
		:class="
			['mobile', 'tablet'].includes(layoutStore.screenSize) ? '' : 'px-32'
		"
	>
		<p
			class="text-slate-400 font-mono"
			:class="layoutStore.screenSize == 'mobile' ? 'text-lg' : 'text-2xl'"
		>
			Hey, my name is
		</p>
		<h1
			class="font-semibold text-slate-200"
			:class="
				layoutStore.screenSize == 'mobile' ? 'text-4xl mt-1' : 'mt-3 text-6xl'
			"
		>
			Juan Isamitt
		</h1>
		<!--
		<h2 class="mt-3 text-lg text-slate-200">Software Engineer</h2>
		-->
		<h2
			class="mt-4 text-slate-300 font-semibold"
			:class="
				layoutStore.screenSize == 'mobile'
					? 'w-full text-md mt-2'
					: 'mt-4 w-4/5 text-3xl'
			"
		>
			I create seamless, dynamic, and powerful web solutions as a
			<span class="text-primary text-nowrap">full-stack engineer</span>.
		</h2>
		<button
			class="px-4 py-2 mt-10 text-slate-200 rounded-lg border-2 w-fit font-mono my-button transition duration-500 hover:scale-105"
			@click="downloadResume()"
		>
			Check Resume
		</button>
	</div>
	<About class="hide" id="about" />
	<Experience
		class="hide"
		:class="
			layoutStore.screenSize == 'mobile'
				? 'py-20'
				: layoutStore.screenSize == 'tablet'
				? 'mx-20 py-40'
				: 'mx-32 py-60'
		"
		id="experience"
	/>
	<Contact
		class="hide"
		:class="
			layoutStore.screenSize == 'mobile'
				? 'py-20'
				: layoutStore.screenSize == 'tablet'
				? 'mx-20 py-20'
				: 'mx-52 py-40'
		"
		id="contact"
	/>
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

		// Get all sections hidden, then show them when you scroll through them
		const hiddenElements = document.querySelectorAll('.hide');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove('hide');
					entry.target.classList.add('show');
				}
			});
		});
		hiddenElements.forEach((element) => {
			observer.observe(element);
		});
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
	.hide {
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}
	.show {
		opacity: 1 !important;
		transition: opacity 1s ease-in-out;
	}

	@keyframes fadeIn {
		/* Transition */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
