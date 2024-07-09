/** @type {import('houdini').ConfigFile} */
const config = {
	apiUrl: 'https://ob-vendure.up.railway.app/shop-api',
	plugins: {
		'houdini-svelte': {
			client: './src/client',
		},
	},
	scalars: {
		DateTime: {
			type: 'string',
		},
	},
	defaultFragmentMasking: true,
}

export default config
