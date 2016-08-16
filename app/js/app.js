// var bootStoreApp = angular.module('bootStoreApp',
// 	['ngRoute','ngAnimate','bookStoreCtrls','bookStoreFilters','bookStoreServices','bookStoreDirectives']
// 	);

// bootStoreApp.config(function($routeProvider){
// 	$routeProvider.when('/hello',{
// 		templateUrl:'tpls/hello.html',
// 		controller:'HelloCtrl'
// 	})
// 	.when('/list',{
// 		templateUrl:'tpls/list.html',
// 		controller:'BookListCtrl'
// 	}).
// 	otherwise({
// 		redirectTo:'/hello'
// 	})	
// });



var bootStoreApp = angular.module('bootStoreApp',
	['ui.router','ngAnimate','bookStoreCtrls','bookStoreFilters','bookStoreServices','bookStoreDirectives']
	);

bootStoreApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/hello");
	
	$stateProvider.state('hello',{
		url:'/hello',
		templateUrl:'tpls/hello.html',
		controller:'HelloCtrl'	
	})
	.state('list',{
		url:'/list',
		views:{
			'' :
			{
				templateUrl:'tpls/list.html',
			},
			'top@list' :
			{
				templateUrl:'tpls/top.html',
				controller:'BookListCtrl'
			},
			'main@list':{
				templateUrl:'tpls/main.html',
				controller:'BookListCtrl'
			}
		}
	})
});
