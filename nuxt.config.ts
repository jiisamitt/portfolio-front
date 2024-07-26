// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@formkit/auto-animate/nuxt'],

	app: {
		head: {
			title: 'Juan Isamitt',
		},
		baseURL: '/',
	},

	compatibilityDate: '2024-07-10',
});
