app.controller('formCtrl', function($scope){

	$scope.states = [
		{
			"state":"Alabama",
			"abbrev":"AL"
		},
		{
			"state":"Arkansas",
			"abbrev":"AK"
		},
		{
			"state":"Washington",
			"abbrev":"WA"
		},
		{
			"state":"New York",
			"abbrev":"NY"
		}
	];

	$scope.switchdata = {
    	cb1: true
  	};

});