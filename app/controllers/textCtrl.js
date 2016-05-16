app.controller('textCtrl', function($scope, $http){

	$scope.items = [];

	$scope.getthem = function(){
		
		$http.get('http://jsonplaceholder.typicode.com/posts')
		.then(function(response){
			$scope.items = response.data;
		});

	}

	

});