function LeadsController($scope, Global, Leads){
	$scope.global = Global;
	$scope.lead = {name:''};

	$scope.$watch('lead.name', function(){
		var nameArray = $scope.lead.name.split(' ');
		$scope.lead.firstName = nameArray.shift();
	    $scope.lead.lastName = nameArray.join(' ');
	});

	$scope.ninja = {valid: true, stage:1};

	$scope.changeNinjaStage = function(stage){
		$scope.ninja.stage = stage;
	};

	$scope.send = function(lead){	
		$scope.message = null;
		if ($scope.lead.phonePrefix) {
		    $scope.lead.phone = '(' + $scope.lead.phonePrefix + ') ' + $scope.lead.phone;
	    }
		Leads.save(lead, function(response) {
			Global.modal.path = "views/dialogs/success.html";
		});
	};
}