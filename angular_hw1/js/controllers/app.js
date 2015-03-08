function AppCtrl ($scope) {
	$scope.users = {
		"John Doe" : {
			"name" : "John Doe",
			"city" : "Portland",
			"interests" : "Angular"
		},
		"Test": {
			"name" : "Test",
			"city" : "St. Louis",
			"interests" : "HTML"
		},
		"Demo" : {
			"name" : "Demo",
			"city" : "Kansas City",
			"interests" : "scala"
		}
	};



	$scope.currentUser = null;
	$scope.editableUser = null;

	$scope.setUser = function(name){
		$scope.editableUser = null;
		$scope.currentUser = $scope.users[name];
	};

	$scope.editUser = function(name){
		$scope.currentUser = null;
		$scope.editableUser = $scope.users[name];
	};


	$scope.details = 'partials/users.html';
	$scope.edit  = 'partials/edit_users.html';
}
