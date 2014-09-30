app.controller("MainController", function($scope) {
	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
		{
			id: 0,
			name: 'Leon',
			live: true,
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 1,
			name: 'Chris',
			live: true,
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 2,
			name: 'Harry',
			live: false,
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			]
		},
		{
			id: 3,
			name: 'Allyce',
			live: true,
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			]
		}
	];
	$scope.newPerson = null;
	$scope.addNew = function() {
		if ($scope.newPerson !== null && $scope.newPerson !== "") {
			$scope.people.push({
				id: $scope.people.length,
				name: $scope.newPerson,
				live: true,
				music: []
			});
		}
	};
});
