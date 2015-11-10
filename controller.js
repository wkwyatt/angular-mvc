var myApp = angular.module('myApp', []);
myApp.controller("session2Controller", function($scope) {

	$scope.addPerson = function(){
		$scope.students.push({name: $scope.newName, desc: $scope.newDesc});
		$scope.newName = "";
		$scope.newDesc = "";
	}

	
	$scope.students = [
	{
		name: "Freddy",
		desc: "Made a football app"
	},
	{
		name: "Chance",
		desc: "Still Loves Bootstrap"
	},
	{
		name: "Stuart",
		desc: "Drove a long way to get here today"
	},
	{
		name: "Peter",
		desc: "Sits in the front row"
	},
	{
		name: "Andrew",
		desc: "Pro boxer"	
	},
	{
		name: "Will",
		desc: "The Entrepenuer"
	},
	{
		name: "Oliver",
		desc: "Eats a lot"
	},
	{
		name: "Rob",
		desc: "teach .."
	}];

	// $scope.color = myColor;
});
myApp.controller('appController', appController);
myApp.controller('myController', function($scope) {
	$scope.classObject = [
	{
		name: "Freddy",
		desc: "Made a cool weather widget"
	},
	{
		name: "Chance",
		desc: "Loves Bootstrap"
	},
	{
		name: "Stuart",
		desc: "Drove a long way to get here today"
	},
	{
		name: "Peter",
		desc: "Sits in the front row"
	},
	{
		name: "Andrew",
		desc: "Pro boxer"	
	},
	{
		name: "Will",
		desc: "The tall one"
	},
	{
		name: "Rob",
		desc: "teach .."
	}];

	// $scope.color = myColor;
});

function appController($scope) {
	$scope.name = "Illis!";
	$scope.firstName = "World!"

	$scope.changeName = function() {
		$scope.name = "World (from button)";
	}

	$scope.students = ["Will","Peter","Griffin","Stuart","Stephen","Chance","Oliver","Freddy","Yohsuke","Andrew"];

	$scope.addStudent = function() {
		$scope.students.push($scope.newName)
	}
}