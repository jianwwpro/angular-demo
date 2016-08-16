var bookStoreCtrls = angular.module('bookStoreCtrls',[]);
bookStoreCtrls.controller('HelloCtrl',['$scope',function($scope){
	$scope.greeting={
		text:'Hello'
	}
}]);
bookStoreCtrls.controller('BookListCtrl',['$scope',function($scope){
	$scope.books=[
		{title:'Java基础教程',author:'王建武'},
		{title:'JavaScript基础教程',author:'王建六'},
		{title:'Angularjs基础教程',author:'王建七'}
	];
}]);