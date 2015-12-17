module.exports = function(grunt){
	grunt.initConfig({

		watch: {
			configFiles:{
				files: [
					//routers
					'routes/*.js',

					//views
					'views/*.ejs',
					'views/users/*.ejs',

					'app.js',

					//public
					'public/*.html',
					'public/asset/html/*.html',
					'public/asset/js/*.js',
					'public/asset/css/*.css',
					'public/html/*.html',
				],
				options:{
					livereload: true
				}	
			},
			reloadWatch: {
				files: 'Gruntfile.js',
				options: {
					reload: true
				}
			}
		}
		
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['watch']);
}