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
					<template v-if="index == 0">
						<div class="text-primary mx-4 hide">▹</div>
						<p
							class="mb-4 text-slate-200 text-2xl font-bold font-mono"
							v-html="text"
						></p>
					</template>
					<template v-if="index == 1">
						<div class="text-primary mx-4 hide">▹</div>
						<p class="mb-4 text-md font-mono" v-html="text"></p>
					</template>
					<template v-if="index > 1">
						<div class="text-primary mx-4">▹</div>
						<p class="mb-4" v-html="text"></p>
					</template>
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
			'Software developer @Consiliumbots',
			'December 2021 - September 2023',
			"Contributed in <span class='text-primary'>developing high-quality front-end informative primers</span> for students who recently took the PTU test (later PAES) and <span class='text-primary'>developed Python testing scripts</span> due to it's high demand in a very short period of time.",
			"Contributed in project MIME/Explorer, a <span class='text-primary'>web-based platform</span> that allows students and parents to <span class='text-primary'>explore and learn about different schools</span>.",
			'Collaborated in the development of DFM, platform that allows students to explore different career paths and learn about different professions, while reducing school exclusion and opening opportunities to access higher education.',
			"Contributed in the <span class='text-primary'>development of a Chatbot</span>, tool that allowed students to ask questions about their future careers and get answers in real time, integrating it with OpenAI.",
		],
		witsby: [
			'Software developer @Witsby',
			'March 2022 - August 2022',
			"Participated in the <span class='text-primary'>development of a mobile application using React Native </span>, with a particular emphasis on enhancing the mobile front end. Work conducted as part of a collaborative partnership between the university and industry.",
		],
		ecorima: [
			'Part-time Software developer @Ecorima',
			'September 2023 - July 2024',
			"<span class='text-primary'>Developed and mantained platform </span> to manage and register incomes and expenses of the company's projects. This including the front end and back end, as well as all the deployment.",
			"Integrated platform with <span class='text-primary'>PDF reader</span>, allowing to automatically read and register the information of the company's invoices.",
		],
		isaviz: [
			'Software developer and cofounder @Isaviz',
			'November 2023 - May 2024',
			"Worked on <span class='text-primary'>platform development</span> for pricing, accreditation, sampling, test taking and management of reports n the laboratory testing area, focusing in the front-end.",
			"Developed <span class='text-primary'>landing page</span> for the company's website.",
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
