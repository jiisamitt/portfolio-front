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
					<span class="text-slate-200">2016</span>, marking the beginning of my
					journey into the world of technology and programming. Since then, I
					have immersed myself in learning various programming languages,
					frameworks, and development tools, continuously expanding my knowledge
					and honing my skills.
				</p>
				<p class="mb-4">
					I am an <span class="text-slate-200">honest person</span> with a deep
					passion for contributing to society and generating a
					<span class="text-slate-200">positive impact</span>. My curiosity and
					enthusiasm for technology drive me to constantly challenge myself,
					learn new things, and embrace the process of problem-solving.
				</p>
				<p class="">
					In addition to my professional activities, I enjoy
					<span
						class="text-primary relative whitespace-nowrap"
						@mouseover="showVideoGame = true"
						@mouseleave="showVideoGame = false"
					>
						<span
							v-show="showVideoGame"
							class="absolute bg-secondary bottom-6 left-[50%] transform -translate-x-1/2 border-2 border-slate-400 px-3 pt-3 pb-1 rounded-lg max-w-32 text-center"
						>
							<img src="@/assets/game.jpeg" alt="Dynamic Image" />
							<span class="text-slate-400 mt-2 text-sm whitespace-nowrap">
								Osrs noob
							</span>
						</span>
						playing videogames</span
					>, occasionally
					<span
						class="text-primary relative whitespace-nowrap"
						@mouseover="showChess = true"
						@mouseleave="showChess = false"
					>
						<span
							v-show="showChess"
							class="absolute bg-secondary bottom-6 left-[50%] transform -translate-x-1/2 border-2 border-slate-400 px-3 pt-3 pb-1 rounded-lg max-w-32 text-center"
						>
							<img src="@/assets/chess.png" alt="Dynamic Image" />
							<span class="text-slate-400 mt-2 text-sm whitespace-nowrap">
								Chess match!
							</span>
						</span>
						playing chess</span
					>, and love engaging in
					<span
						class="text-primary relative whitespace-nowrap"
						@mouseover="showSports = true"
						@mouseleave="showSports = false"
					>
						<span
							v-show="showSports"
							class="absolute bg-secondary bottom-6 left-[50%] transform -translate-x-1/2 border-2 border-slate-400 px-3 pt-3 pb-1 rounded-lg max-w-32 text-center"
						>
							<img src="@/assets/nature.jpeg" alt="Dynamic Image" />
							<span class="text-slate-400 mt-2 text-sm whitespace-nowrap">
								I like nature
							</span> </span
						>different activites</span
					>
					in my free time.
				</p>
			</div>
			<div class="basis-1/3 flex justify-center items-center mt-10 lg:mt-0">
				<!-- wrapper -->
				<div
					class="relative z-0 bg-primary rounded-2xl overflow-hidden"
					:class="
						layoutStore.screenSize == 'mobile'
							? 'w-3/5'
							: layoutStore.screenSize == 'tablet'
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

	const showVideoGame = ref(false);
	const showChess = ref(false);
	const showSports = ref(false);

	const layoutStore = useLayoutStore();
</script>

<style scoped>
	.about {
		height: 100%;
	}
</style>
