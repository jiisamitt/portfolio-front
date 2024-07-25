<template>
	<header
		class="flex items-center w-screen justify-between nav-bar mx-auto fixed z-20"
		:class="[
			scrolledDown ? 'scroll-down h-16' : 'h-20',
			layoutStore.screenSize === 'mobile' ? 'px-8' : 'px-20',
		]"
		v-auto-animate="{ duration: 300 }"
	>
		<nav class="flex w-full justify-between">
			<div
				class="text-lg text-slate-200 font-semibold font-mono opacity-0 transition-opacity duration-1000"
				ref="logoEl"
			>
				JI
			</div>
			<div
				class="text-m font-mono opacity-0 transition-opacity duration-1000"
				ref="navEl"
			>
				<ol
					class="flex gap-8"
					v-if="['desktop', 'tablet'].includes(layoutStore.screenSize)"
				>
					<li
						v-for="section in sections"
						:key="section"
						:class="{ active: activeSection === section }"
						class="transition duration-500 cursor-pointer text-slate-400 hover:text-slate-200"
						@click="setActiveSection(section)"
					>
						{{ section.charAt(0).toUpperCase() + section.slice(1) }}
					</li>
				</ol>
				<div
					v-if="layoutStore.screenSize == 'mobile'"
					class="cursor-pointer"
					@click="toggleMenu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-8 text-slate-200"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>
			</div>
		</nav>
	</header>
	<div
		v-if="showMenu"
		class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
		@click="closeMenu"
	></div>
	<div
		v-if="showMenu"
		class="fixed top-0 right-0 w-8/12 h-screen bg-secondary z-50 shadow-2xl"
		@click.stop
	>
		<ol class="flex flex-col items-center justify-center h-full">
			<li
				v-for="section in sections"
				:key="section"
				:class="{ active: activeSection === section }"
				class="transition duration-500 cursor-pointer text-slate-400 hover:text-slate-200 text-2xl mb-4"
				@click="setActiveSection(section)"
			>
				{{ section.charAt(0).toUpperCase() + section.slice(1) }}
			</li>
		</ol>
	</div>
	<div
		class="mx-auto min-h-screen max-w-7xl"
		:class="layoutStore.screenSize == 'mobile' ? 'px-8' : 'px-20'"
	>
		<slot />
		<Footer />
	</div>
</template>

<script setup>
	import { ref, onMounted, watch } from 'vue';
	import { useLayoutStore } from '../store/LayoutStore';
	import Footer from '../components/Footer.vue';

	// sections array
	const sections = ['about', 'experience', /*'projects',*/ 'contact'];

	// Active section state
	const activeSection = ref('');
	const layoutStore = useLayoutStore();

	const setActiveSection = (section) => {
		activeSection.value = section;
		layoutStore.setSelectedSection(section);
		closeMenu();
	};

	// Watch store selectedSection for changes
	watch(
		() => layoutStore.selectedSection,
		(newVal) => {
			if (newVal) {
				activeSection.value = newVal;
			}
		}
	);

	// Menu
	const showMenu = ref(false);
	const toggleMenu = () => {
		showMenu.value = !showMenu.value;
	};
	const closeMenu = () => {
		showMenu.value = false;
	};

	// Scroll state
	const scrolledDown = ref(false);

	const handleOnMouseMove = (e) => {
		const { currentTarget: target } = e;
		const rect = target.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		target.style.setProperty('--x', `${x}px`);
		target.style.setProperty('--y', `${y}px`);
	};

	const logoEl = ref(null);
	const navEl = ref(null);

	onMounted(() => {
		const body = document.querySelector('body');
		if (body) {
			body.addEventListener('mousemove', handleOnMouseMove);
		}
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				scrolledDown.value = true;
			} else {
				scrolledDown.value = false;
			}
		});
		// add opacity-100 to logo and nav
		logoEl.value.classList.add('opacity-100');
		navEl.value.classList.add('opacity-100');
	});
</script>

<style>
	.nav-bar {
		background-color: #10172abf;
		transition: all 0.5s;
	}
	.content {
	}
	body::before {
		background: radial-gradient(
			400px at var(--x) var(--y),
			rgba(29, 79, 216, 0.09),
			transparent 80%
		);
		border-radius: inherit;
		content: '';
		min-height: 100%;
		left: 0px;
		position: absolute;
		top: 0px;
		width: 100%;
		z-index: 30;
		pointer-events: none;
	}
	body {
		margin: 0;
		background-color: #10172a;
		position: relative;
		min-height: 100%;
	}
	html {
		min-height: fit-content;
	}
	.scroll-down {
		/* add shadow*/
		box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.589);
		/* blurr */
		backdrop-filter: blur(3px);
	}
	/* add transition for nav buttons, an underline should appear from the left if its clicked */
	nav li {
		position: relative;
	}
	nav li::before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: -3px;
		left: 0;
		background-color: #f9f9f9;
		transition: width 0.3s;
	}
	nav li.active::before {
		width: 100%;
	}
	.active {
		color: #f9f9f9 !important;
	}
</style>
