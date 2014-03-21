angular.module("gettext").run(['gettextCatalog',
function(gettextCatalog) {
	/* jshint -W100 */
	gettextCatalog.setStrings('ru', {
		"{{ num }} items selected" : ["{{ num }} предмет выбран", "{{ num }} предмета выбранно", "{{ num }} предметов выбранно"]
	});

	/* jshint +W100 */
}]); 