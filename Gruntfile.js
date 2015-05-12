module.exports = function(grunt) {
	
	// Load all grunt tasks
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		
		bower: {
			install: {
				//just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory 
			}
		}
		
	});
	
	grunt.registerTask('default',['bower']);
};