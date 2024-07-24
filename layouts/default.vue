<template>
	<header
		class="flex items-center w-screen justify-between nav-bar h-20 mx-auto px-20 fixed z-20"
		:class="scrolledDown ? 'scroll-down h-16' : 'h-20'"
	>
		<nav class="flex w-full justify-between">
			<div class="text-lg text-slate-200 font-semibold font-mono">JI</div>
			<div class="text-m font-mono">
				<ol class="flex gap-8">
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
			</div>
		</nav>
	</header>
	<div class="flex mx-auto px-20 min-h-screen max-w-7xl">
		<div class="content flex-1">
			<div class="flex-none">
				<slot />
			</div>
		</div>
	</div>
	<footer
		class="flex flex-col text-slate-400 font-mono text-sm py-10 px-20 text-center w-full"
	>
		<!-- socials-->
		<ul class="flex flex-row items-center justify-center gap-6 ml-1">
			<li>
				<a
					href="
						https://github.com/jiisamitt
					"
					target="_blank"
					aria-label="LinkedIn"
					rel="noreferrer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						class="fill-slate-400 hover:fill-primary"
					>
						<path
							d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
						></path></svg
				></a>
			</li>
			<li>
				<a
					href="
					https://www.linkedin.com/in/juan-isamitt-pualuan-52a693192/"
					target="_blank"
					aria-label="GitHub"
					rel="noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="30"
						height="30"
						viewBox="0 0 50 50"
						class="fill-slate-400 hover:fill-primary"
					>
						<path
							d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"
						></path></svg
				></a>
			</li>
			<li>
				<a
					href="
					mailto:juanisamitt@gmail.com"
					target="_blank"
					aria-label="Gmail"
					rel="noreferrer"
				>
					<svg
						width="30"
						height="30"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="fill-slate-400 hover:fill-primary"
					>
						<path
							d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
							stroke="#10172a"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/></svg
				></a>
			</li>
		</ul>
		<!-- footer text -->
		<div class="justify-center mt-4 w-1/3 mx-auto text-center text-slate-400">
			<p>
				Built by <span class="text-primary">Juan Isamitt</span> using
				<span class="text-slate-200">Nuxt</span>,
				<span class="text-slate-200">Tailwind CSS</span> and deployed in
				<span class="text-slate-200">Netlify</span>.
			</p>
		</div>
	</footer>
</template>

<script setup>
	import { ref, onMounted, watch } from 'vue';
	import { useLayoutStore } from '../store/LayoutStore';

	// sections array
	const sections = ['about', 'experience', 'projects', 'contact'];

	// Active section state
	const activeSection = ref('');
	const layoutStore = useLayoutStore();

	const setActiveSection = (section) => {
		activeSection.value = section;
		layoutStore.setSelectedSection(section);
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