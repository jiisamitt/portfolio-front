<template>
	<div class="flex flex-col">
		<h2 class="text-3xl text-slate-200 font-semibold font-mono title mb-4">
			<span class="text-primary"><</span
			><span class="text-slate-200">AboutMe</span
			><span class="text-primary"> /></span>
		</h2>

		<!-- line filler -->
		<div
			class="flex"
			:class="
				['mobile', 'tablet'].includes(layoutStore.screenSize)
					? 'flex-col'
					: 'flex-row'
			"
		>
			<div
				class="text-slate-400"
				:class="
					['mobile', 'tablet'].includes(layoutStore.screenSize)
						? ''
						: 'basis-2/3 pr-20'
				"
			>
				<p class="mb-4">
					I printed my first "Hello World" back in
					<span class="text-primary">2016</span>, marking the beginning of my
					journey into the world of technology and programming. Since then, I
					have immersed myself in learning various programming languages,
					frameworks, and development tools, continuously expanding my knowledge
					and honing my skills.
				</p>
				<p class="mb-4">
					I am an <span class="text-primary">honest person</span> with a deep
					passion for contributing to society and generating a
					<span class="text-primary">positive impact</span>. My curiosity and
					enthusiasm for technology drive me to constantly challenge myself,
					learn new things, and embrace the process of problem-solving.
				</p>
				<p class="">
					In addition to my professional pursuits, I am an avid
					<span class="text-primary">chess</span>
					enthusiast, enjoy playing
					<span class="text-primary">video games</span>

					, and engage in any type of
					<span class="text-primary">sports</span>.
				</p>
			</div>
			<div class="basis-1/3 flex justify-center items-center mt-10 lg:mt-0">
				<!-- wrapper -->
				<div
					class="relative z-0 bg-primary rounded-2xl overflow-hidden"
					:class="
						['mobile', 'tablet'].includes(layoutStore.screenSize)
							? 'w-2/5'
							: 'w-full'
					"
				>
					<img
						class="relative z-0 rounded-2xl mix-blend-multiply border-2 border-slate-400 transition-opacity duration-500"
						src="assets/portfolio-me.jpeg"
						alt="Juan Isamitt"
					/>
					<img
						class="absolute inset-0 rounded-2xl mix-blend-normal border-2 border-slate-200 opacity-0 transition-opacity duration-500 hover:opacity-100"
						src="assets/portfolio-me.jpeg"
						alt="Juan Isamitt"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useLayoutStore } from '../store/LayoutStore';
	import Tooltip from '../components/Tooltip.vue'; // Import the Popup component

	const layoutStore = useLayoutStore();
</script>

<style scoped>
	.about {
		height: 100%;
	}
</style>
