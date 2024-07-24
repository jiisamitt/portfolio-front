<template>
	<div class="flex flex-col">
		<h2 class="text-3xl text-slate-200 font-semibold font-mono title mb-4">
			<span class="text-primary"><</span
			><span class="text-slate-200">AboutMe</span
			><span class="text-primary"> /></span>
		</h2>

		<!-- line filler -->
		<div class="flex flex-row">
			<div class="basis-2/3 text-slate-400">
				<p class="w-4/5 mb-4">
					I printed my first "Hello World" back in 2016, marking the beginning
					of my journey into the world of technology and programming. Since
					then, I have immersed myself in learning various programming
					languages, frameworks, and development tools, continuously expanding
					my knowledge and honing my skills.
				</p>
				<p class="w-4/5 mb-4">
					I am an honest individual with a deep passion for contributing to
					society and generating a positive impact. My curiosity and enthusiasm
					for technology drive me to constantly challenge myself, learn new
					things, and embrace the process of problem-solving. I believe that
					technology, when used responsibly, has the power to drive significant
					changes to society.
				</p>
				<p class="w-4/5">
					In addition to my professional pursuits, I am an avid video game
					enthusiast, enjoy playing chess, and engage in various sports. These
					hobbies provide balance and enrich my perspective in both life and
					work.
				</p>
			</div>
			<div class="basis-1/3">
				<!-- wrapper -->
				<div
					class="relative z-0 bg-primary height-fit width-fit rounded-2xl overflow-hidden"
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

<script setup></script>

<style scoped>
	.about {
		height: 100%;
	}
</style>
