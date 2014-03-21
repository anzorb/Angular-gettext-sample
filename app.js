var prototypeApp = angular.module('prototypeApp', ['gettext']).controller('selection', ['$scope', '$rootScope', '$window', '$location',
function($scope, $rootScope, $window, $location) {
	$scope.num = 5;
	setTimeout(function() {
		$scope.num = 222;
		$scope.$apply();
	}, 5000);
}]);

prototypeApp.run(function(gettextCatalog) {
	gettextCatalog.currentLanguage = 'ru';
}); 