<template>
	<div class="flex flex-col">
		<h2 class="text-3xl text-slate-200 font-semibold font-mono title mb-4">
			<span class="text-primary"><</span
			><span class="text-slate-200">Experience</span
			><span class="text-primary"> /></span>
		</h2>

		<!-- line filler -->
		<div
			class="flex bg-secondary"
			:class="
				layoutStore.screenSize == 'mobile' ? 'flex-col gap-10' : 'flex-row'
			"
		>
			<div
				class="basis-1/5 flex"
				:class="
					layoutStore.screenSize == 'mobile'
						? 'flex-row overflow-x-auto gap-4'
						: 'flex-col'
				"
			>
				<!-- timeline-->
				<div v-for="(exp, key) in experience" :key="key" class="font-mono">
					<button
						@click="setSelectedExperience(key)"
						:class="[
							{
								'text-primary border-primary': selectedExperience === key,
								'text-slate-400': selectedExperience !== key,
							},
							layoutStore.screenSize !== 'mobile'
								? 'hover:border-slate-400 hover:bg-[#ffffff09] hover:text-slate-200'
								: '',
						]"
						class="capitalize w-full text-left border-l-2 pl-6 py-2 transition-{border-color} duration-500 rounded-r-lg"
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
						<div class="text-primary mx-4 content-none pl-[14px]"></div>
						<p
							class="mb-4 text-slate-200 text-2xl font-bold font-mono"
							v-html="text"
						></p>
					</template>
					<template v-if="index == 1">
						<div class="text-primary mx-4 content-none pl-[14px]"></div>
						<p class="mb-4 text-md text-slate-600 font-mono" v-html="text"></p>
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
	import { useLayoutStore } from '../store/LayoutStore';

	const layoutStore = useLayoutStore();

	// Work experience array (most recent first)
	const experience = ref({
		equanima: [
			"Cofounder / Project Lead <a class='text-slate-200'>@Equanima</a>",
			'January 2025 - Present',
			"Lead multidisciplinary teams of healthcare professionals (physiotherapy, medicine, psychology, nutrition), supporting the <span class='text-slate-200'>automation of internal processes</span>.",
			"Built the <span class='text-slate-200'>scheduling system</span> for patients, professionals, and admins: appointment booking, patient records, payment tracking, automatic reminders, and task automation across integrated systems.",
			"Contribute to technical development and management of software projects using <span class='text-slate-200'>Django</span> backends, databases, testing, and process automation.",
		],
		ecorima: [
			"Software Engineer <a class='text-primary' href='https://ecorima.cl/' target='_blank'>@Ecorima</a>",
			'September 2023 - July 2024',
			"<span class='text-slate-200'>Developed and maintained a platform</span> to manage construction project expenses and income, with automated PDF data extraction using Python and PostgreSQL.",
		],
		isaviz: [
			"Software Engineer and Cofounder <a class='text-slate-200'>@Isaviz</a>",
			'November 2023 - May 2024',
			"Worked on <a class='text-primary' href='https://www.precirelab.cl/home' target='_blank'>platform development</a> for pricing, accreditation, sampling, test taking and management of reports in the laboratory testing area, using Vue/Vuetify.",
			"Developed <a class='text-primary' href='https://www.precirelab.cl/login' target='_blank'>landing page</a> for the company's website and led teams following SOLID design patterns.",
		],
		consiliumbots: [
			"Software Engineer <a class='text-primary' href='https://www.consiliumbots.com/' target='_blank'>@Consiliumbots</a>",
			'December 2021 - September 2023',
			"Contributed in <span class='text-slate-200'>developing high-quality front-end informative primers</span> for students who recently took the PTU test (later PAES) and <span class='text-slate-200'>developed Python testing scripts</span> due to it's high demand in a very short period of time.",
			"Second iteration of primers with migration of serverless backends to Django, Slack messaging bots, Factory Boy test data, and Locust load testing.",
			'Collaborated in the development of DFM, platform that allows students to explore different career paths and learn about different professions, while reducing school exclusion and opening opportunities to access higher education.',
			"Contributed in the <span class='text-slate-200'>development of a Chatbot</span>, tool that allowed students to ask questions about their future careers and get answers in real time, integrating it with OpenAI.",
		],
	});

	// selected work experience
	const selectedExperience = ref('equanima');

	// set selected experience
	const setSelectedExperience = (experience) => {
		const experienceText = document.getElementById(
			'experience-text' + selectedExperience.value
		);
		experienceText.classList.add('hide');
		setTimeout(() => {
			selectedExperience.value = experience;
			experienceText.classList.remove('hide');
		}, 700);
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
