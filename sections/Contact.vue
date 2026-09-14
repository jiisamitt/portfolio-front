<template>
	<div class="flex flex-col">
		<!-- pretty card -->
		<div
			class="rounded-xl border-2 border-slate-400 bg-secondary py-8 shadow-lg"
			:class="layoutStore.screenSize == 'mobile' ? 'px-4' : 'px-20'"
			style="box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.489)"
		>
			<!-- title -->
			<h2
				class="text-slate-200 font-semibold font-mono title mb-4"
				:class="
					layoutStore.screenSize == 'mobile'
						? 'text-2xl text-center'
						: 'text-3xl text-left'
				"
			>
				<span class="text-primary"><</span
				><span class="text-slate-200">ContactMe</span
				><span class="text-primary"> /></span>
			</h2>

			<div class="flex flex-col">
				<p
					class="mb-4 text-slate-400"
					:class="
						layoutStore.screenSize == 'mobile' ? 'text-center' : 'text-left'
					"
				>
					Feel free to reach out to me for any inquiries, collaborations, or
					just to say hi! You can send me an email at
					<span class="text-primary">
						<a href="mailto:juanisamitt@gmail.com"> juanisamitt@gmail.com </a>
					</span>
					or send me a message right here!
				</p>
				<!-- mail input -->
				<input
					class="p-2 mt-4 text-slate-200 rounded-lg border-2 bg-secondary focus:outline-none"
					:class="
						emailError
							? 'border-red-400 focus:border-red-400'
							: 'border-slate-400 focus:border-primary'
					"
					type="email"
					placeholder="Type your email"
					v-model="email"
					@blur="validateEmailField"
					@input="emailError = ''"
					:disabled="isMessageSent || isLoading"
				/>
				<p v-if="emailError" class="mt-2 text-sm text-red-400">
					{{ emailError }}
				</p>
				<!-- message input -->
				<textarea
					class="h-32 p-2 mt-4 text-slate-200 rounded-lg border-2 border-slate-400 bg-secondary focus:outline-none focus:border-primary"
					placeholder="Type your message here..."
					v-model="message"
					:disabled="isMessageSent || isLoading"
				></textarea>

				<p v-if="errorMessage" class="mt-3 text-sm text-red-400 text-center">
					{{ errorMessage }}
				</p>

				<!-- contact button -->
				<button
					id="contact-button"
					class="px-4 py-2 mt-10 rounded-lg border-2 font-mono transition-all duration-500 mx-auto w-52 hover:scale-105"
					:class="
						isMessageSent
							? 'my-button-blocked'
							: 'my-button text-primary border-primary'
					"
					@click="sendMessage()"
					:disabled="isLoading || isMessageSent"
				>
					{{
						!isLoading && !isMessageSent
							? 'Send message!'
							: isLoading
							? 'Loading...'
							: 'Message sent!'
					}}
				</button>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from 'vue';
	import { useLayoutStore } from '../store/LayoutStore';

	// Store
	const layoutStore = useLayoutStore();

	// Data
	const email = ref('');
	const message = ref('');
	const isMessageSent = ref(false);
	const isLoading = ref(false);
	const errorMessage = ref('');
	const emailError = ref('');

	const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const isValidEmail = (value) => EMAIL_REGEX.test(value.trim());

	const validateEmailField = () => {
		const value = email.value.trim();
		if (!value) {
			emailError.value = 'Email is required';
			return false;
		}
		if (!isValidEmail(value)) {
			emailError.value = 'Please enter a valid email address';
			return false;
		}
		emailError.value = '';
		return true;
	};

	// Free FormSubmit endpoint (no API key). First use may require email confirmation.
	const FORM_ENDPOINT = 'https://formsubmit.co/ajax/juanisamitt@gmail.com';

	const sendMessage = async () => {
		if (isMessageSent.value || isLoading.value) return;

		const emailOk = validateEmailField();
		if (!emailOk || !message.value.trim()) {
			errorMessage.value = !message.value.trim()
				? 'Please fill in all fields'
				: '';
			return;
		}

		isLoading.value = true;
		errorMessage.value = '';

		try {
			const response = await fetch(FORM_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					email: email.value.trim(),
					message: message.value.trim(),
					_subject: 'Portfolio contact from juanisamitt.com',
					_template: 'table',
				}),
			});

			const data = await response.json().catch(() => ({}));

			if (!response.ok) {
				throw new Error(data.message || 'Could not send message');
			}

			email.value = '';
			message.value = '';
			isMessageSent.value = true;
		} catch (error) {
			errorMessage.value =
				'Could not send the message. Please email me directly at juanisamitt@gmail.com';
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};
</script>

<style scoped></style>
