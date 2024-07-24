<template>
	<div class="flex flex-col">
		<h2 class="text-3xl text-slate-200 font-semibold font-mono title mb-4">
			<span class="text-primary"><</span
			><span class="text-slate-200">Experience</span
			><span class="text-primary"> /></span>
		</h2>

		<!-- line filler -->
		<div class="flex flex-row">
			<div class="basis-1/5 flex flex-col">
				<!-- timeline-->
				<div v-for="(exp, key) in experience" :key="key" class="font-mono">
					<button
						@click="setSelectedExperience(key)"
						:class="{
							'text-primary border-primary': selectedExperience === key,
							'text-slate-400 ': selectedExperience !== key,
						}"
						class="capitalize w-full text-left border-l-2 pl-6 py-2 hover:text-slate-200 transition-{border-color} duration-500"
					>
						{{ key }}
					</button>
				</div>
			</div>
			<div
				class="basis-4/5 text-slate-400 min-h-52 transition-opacity duration-500"
				:id="'experience-text' + selectedExperience"
			>
				<!-- vfor for every text in selected experience -->
				<div
					v-for="(text, index) in experience[selectedExperience]"
					:key="selectedExperience + '-' + index"
					class="flex flex-row experience-text"
				>
					<div class="text-primary mx-4">▹</div>
					<p class="mb-4">
						{{ text }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	// Work experience array
	const experience = ref({
		consiliumbots: [
			'Developed a chatbot thingy for cb',
			'Designed and implemented a chatbot builder with a drag-and-drop interface. for cb',
			'Developed a chatbot platform for businesses to automate customer service. for cb',
			'Designed and implemented a chatbot builder with a drag-and-drop interface. for cb',
		],
		witsby: [
			'Developed a chatbot platform for businesses to automate customer service. for with',
			'Designed and implemented a chatbot builder with a drag-and-drop interface.',
		],
		ecorima: [
			'Developed a chatbot platform for businesses to automate customer service. for exo',
			'Designed and implemented a chatbot builder with a drag-and-drop interface. for ex',
		],
		isaviz: [
			'Developed a chatbot platform for businesses to automate customer service. for isa',
			'Designed and implemented a chatbot builder with a drag-and-drop interface. ofr isa',
		],
	});

	// selected work experience
	const selectedExperience = ref('consiliumbots');

	// set selected experience
	const setSelectedExperience = (experience) => {
		const experienceText = document.getElementById(
			'experience-text' + selectedExperience.value
		);
		experienceText.classList.add('hide');
		setTimeout(() => {
			selectedExperience.value = experience;
			experienceText.classList.remove('hide');
		}, 500);
	};
</script>

<style scoped>
	.about {
		height: 100%;
	}
	/* add fade effect */
	.hide {
		opacity: 0;
	}
	.show {
		opacity: 1;
	}
</style>
