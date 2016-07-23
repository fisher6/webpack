module.exports = {

	entry: './index.js',

	module: {
		loaders: [		
			{
				test: /.js$/,
				loader: 'babel' // rea
			}
		]
	},
	output: {
		path: '.',
		filename: 'b_script.js'
	}
};