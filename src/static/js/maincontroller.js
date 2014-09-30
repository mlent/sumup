app.controller("TweetController", function($scope, $http) {
	$http({ 
		method: 'GET', 
		url: 'http://monicalent.com:5000/tweets/'
	}).success(function(data) {
		$scope.tweets = data.data;
	})

});
