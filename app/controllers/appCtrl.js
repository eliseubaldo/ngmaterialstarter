app.controller('appCtrl', ['$scope', '$mdSidenav', '$interval', function($scope, $mdSidenav, $interval) {


	$scope.toggleLeft = function(elementid){
		$mdSidenav(elementid).toggle();
	} 

	$scope.pbar = 0;

    $interval(function() {
      $scope.pbar += 1;
      if ($scope.pbar > 100) $scope.pbar = 0;      
    }, 400, 0, true);
    

}]);