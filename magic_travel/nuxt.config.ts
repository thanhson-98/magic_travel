// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxt/image', '@pinia/nuxt'],
	image: {
		quality: 80,
	},
	alias: {
		'@components': '/components',
		'@layouts': '/layouts',
		'@pages': '/pages',
		'@assets': '/assets',
		'@data': '/data',
	},
	imports: {
		dirs: ['stores'],
	},
});
