module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,svg}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};