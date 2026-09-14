<template>
	<div
		ref="main"
		class="h-screen flex flex-col justify-center hide mb-2"
		:class="
			['mobile', 'tablet'].includes(layoutStore.screenSize) ? '' : 'px-32'
		"
		id="home"
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
			class="px-4 py-2 mt-10 rounded-lg border-2 w-fit font-mono my-button text-primary border-primary transition duration-500 hover:scale-105"
			@click="downloadResume()"
		>
			Check Resume
		</button>
	</div>
	<About class="hide py-20" id="about" />
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
	import resume from '@/assets/resume-english.pdf';
	import { useLayoutStore } from '../store/LayoutStore';
	import { onMounted, onUnmounted, watch } from 'vue';

	// Download resume from assets
	const downloadResume = () => {
		const link = document.createElement('a');
		link.href = resume;
		link.download = 'Juan_Isamitt_Resume.pdf';
		link.click();
	};

	const layoutStore = useLayoutStore();
	const sectionIds = ['home', 'about', 'experience', 'contact'];
	let sectionObserver = null;

	const scrollToSection = (section) => {
		const el = document.getElementById(section);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// Scroll only on nav click (scroll-spy updates selectedSection without scrolling)
	watch(
		() => layoutStore.scrollToSection,
		(section) => {
			if (section) {
				scrollToSection(section);
				layoutStore.clearScrollToSection();
			}
		}
	);

	onMounted(() => {
		window.scrollTo(0, 0);

		// Reveal sections on scroll
		const hiddenElements = document.querySelectorAll('.hide');
		const revealObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove('hide');
					entry.target.classList.add('show');
				}
			});
		});
		hiddenElements.forEach((element) => {
			revealObserver.observe(element);
		});

		// Mark navbar for the section currently in view
		sectionObserver = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible.length > 0) {
					const id = visible[0].target.id;
					layoutStore.setActiveSection(id === 'home' ? '' : id);
				}
			},
			{
				root: null,
				rootMargin: '-35% 0px -45% 0px',
				threshold: [0.1, 0.25, 0.5, 0.75],
			}
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) sectionObserver.observe(el);
		});
	});

	onUnmounted(() => {
		if (sectionObserver) sectionObserver.disconnect();
	});
</script>
<style>
	.my-button {
		border-color: #be92b7;
		color: #be92b7;
	}
	.my-button:hover {
		background-color: #be92b733;
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
