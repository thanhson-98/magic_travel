// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxt/image', '@pinia/nuxt'],
	image: {
		quality: 80,
	},
	alias: {
		'@components': resolve(__dirname, 'components'),
		'@layouts': resolve(__dirname, 'layouts'),
		'@pages': resolve(__dirname, 'pages'),
		'@assets': resolve(__dirname, 'assets'),
		'@data': resolve(__dirname, 'data'),
		'@app': resolve(__dirname, 'app'),
		opLodash: resolve(__dirname, 'opLodash.js'),
	},
	imports: {
		dirs: ['stores'],
	},
});
