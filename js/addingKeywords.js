angular.module("addingKeywords", [])
	
.controller("keywordsCtrl", function($scope){
	$scope.whatProvidedContainer = [];
	$scope.whatLookingContainer = [];

	$scope.addItem = function(item, whichItem) {
		if (angular.isDefined(item) && item != "") {
			if (whichItem === "whatProvided") {
				$scope.whatProvidedContainer.push(item);
				$scope.whatProvidedItem = "";
			}
			else {
				$scope.whatLookingContainer.push(item);
				$scope.whatLookingItem = "";
			}
		}
	};

	$scope.removeItem = function(itemIndex, whichItem) {
		if (whichItem === "whatProvided") {
			$scope.whatProvidedContainer.splice(itemIndex, 1);
		}
		else {
			$scope.whatLookingContainer.splice(itemIndex, 1);
		}
	};
})