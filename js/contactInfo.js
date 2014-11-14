angular.module("contactInfo", [])
.controller("contactCtrl", function($scope, $window){
	var newUser = {};
	$scope.months = [];
	$scope.days = [];
	$scope.years = [];
	for (var i = 1; i <=12; i++) {
		$scope.months.push(i.toString());
	}
	for (var i = 1; i <= 31; i++) {
		$scope.days.push(i.toString());
	}
	for (var i = 1900; i <= 2014; i++) {
		$scope.years.push(i.toString());
		$scope.years.reverse();
	}

	$scope.saveUser = function(userDetails) {
		if ($scope.contactInfoForm.$valid) {
			for (var property in userDetails) {
				newUser[property] = userDetails[property];
				console.log(property + ": " + newUser[property]);
			}
		}
		else {
			$scope.formValidation = true;
		}
		
	};

	$scope.removeInfo = function(userDetails) {
		for (var key in userDetails) {
			userDetails[key] = ""
		}
	}

	$scope.getError = function(error) {
		if (angular.isDefined(error)) {
			if (error.required) {
				return "Please enter a value";
			}
			else if (error.email) {
				return "Please enter a valid email";
			}
		}
	}

	$scope.closeWindow = function() {
		$window.close();
	}
})