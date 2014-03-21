module.exports = function(grunt) {

	grunt.initConfig({
		nggettext_extract : {
			pot : {
				files : {
					'translations/template.pot' : ['*.html']
				}
			},
		},
		nggettext_compile : {
			all : {
				files : {
					'translations.js' : ['translations/*.po']
				}
			},
		},
		bowerInstall : {
			target : {
				src: ["index.html"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-angular-gettext');
	grunt.loadNpmTasks('grunt-bower-install');
	grunt.registerTask('extract', ['nggettext_extract']);
	grunt.registerTask('compile', ['nggettext_compile']);
	grunt.registerTask('default', ['bowerInstall']);
}; 