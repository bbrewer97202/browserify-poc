module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

			//if ENOENT error, make sure destination directory, e.g. /src/js exists
			browserify: {
				dev: {
					src: [
						'./src/js/entry/home.js',
						'./src/js/entry/special.js'
					],
					dest: './dist/js/core.js',
					options: {
						plugin: [
							['factor-bundle', { 
								outputs: [
									'./dist/js/home.js', 
									'./dist/js/special.js'
								]
							}]
						],
					}
				}
			},

		// browserify: {
		// 	dev: {
		// 		src: [
		// 			'src/js/entry/home.js',
		// 			'src/js/entry/special.js'
		// 		],
		// 		dest: 'dist/js/core.js',
		// 		options: {
		// 			plugin: [
		// 				['factor-bundle', { 
		// 					outputs: [
		// 						[
		// 							'dist/js/home.js',
		// 							'dist/js/special.js'
		// 						]
		// 					]
		// 				}]
		// 			]
		// 		}
		// 	}
		// },

		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					keepalive: true
				}
			}
		}		
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['browserify:dev', 'connect']);

};

