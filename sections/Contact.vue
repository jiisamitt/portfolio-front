<template>
	<div class="flex flex-col mx-64">
		<!-- pretty card -->
		<div
			class="rounded-xl border-2 border-slate-400 bg-secondary py-8 px-20 shadow-lg"
			style="box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.489)"
		>
			<!-- title -->
			<h2
				class="text-3xl text-slate-200 font-semibold font-mono title mb-4 text-left"
			>
				<span class="text-primary"><</span
				><span class="text-slate-200">ContactMe</span
				><span class="text-primary"> /></span>
			</h2>

			<div class="flex flex-col">
				<p class="mb-4 text-slate-400 text-left">
					Feel free to reach out to me for any inquiries, collaborations, or
					just to say hi! You can send me an email at
					<span class="text-primary">
						<a href="mailto:juanisamitt@gmail.com"> juanisamitt@gmail.com </a>
					</span>
					or send me a message right here!
				</p>
				<!-- mail input -->
				<input
					class="p-2 mt-4 text-slate-200 rounded-lg border-2 border-slate-400 bg-secondary focus:outline-none focus:border-primary"
					type="email"
					placeholder="Type your email"
					v-model="email"
				/>
				<!-- message input -->
				<textarea
					class="h-32 p-2 mt-4 text-slate-200 rounded-lg border-2 border-slate-400 bg-secondary focus:outline-none focus:border-primary"
					placeholder="Type your message here..."
					v-model="message"
				></textarea>

				<!-- contact button -->
				<button
					id="contact-button"
					v-auto-animate
					class="px-4 py-2 mt-10 text-slate-200 rounded-lg border-2 font-mono my-button transition-all duration-500 mx-auto w-52 hover:scale-105"
					@click="sendMessage()"
					v-html="
						!isLoading && !isMessageSent
							? 'Send message!'
							: isLoading
							? `Loading...`
							: `Message sent!`
					"
				></button>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from 'vue';
	import emailjs from '@emailjs/browser';

	const email = ref('');
	const message = ref('');
	const SERVICE_ID = 'service_f0t4zx8';
	const TEMPLATE_ID = 'template_vbyyriu';
	const PUBLIC_KEY = 'fiyRZ-7QggWLZaB7K';

	const isMessageSent = ref(false);
	const isLoading = ref(false);

	// Send message function
	const sendMessage = () => {
		// If email is already sent, return
		if (isMessageSent.value) return;

		// If email or message is empty, show error and return
		if (!email.value || !message.value) {
			alert('Please fill in all fields');
			return;
		}
		isLoading.value = true;
		emailjs
			.send(
				SERVICE_ID,
				TEMPLATE_ID,
				{
					from_name: email.value,
					message: message.value,
				},
				PUBLIC_KEY
			)
			.then(
				(result) => {
					email.value = '';
					message.value = '';
					isMessageSent.value = true;
					isLoading.value = false;
					const button = document.getElementById('contact-button');
					button.classList.add('my-button-blocked');
					button.classList.remove('my-button');
				},
				(error) => {
					console.log(error.text);
					isLoading.value = false;
				}
			);
	};
</script>

<style scoped></style>
