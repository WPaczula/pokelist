module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@hooks': './hooks',
						'@lib': './lib',
						'@components': './components',
						'@declarations': './declarations',
					},
				},
			],
		],
	}
}
