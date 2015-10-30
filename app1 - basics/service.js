angular.module("app1").service("mainService", function() {
	var anArray = [
		"banana1",
		"banana2",
		"banaan3",
		"chimpanzee"
	];

	this.returnDataOrSomething = function() {
		return anArray;
	}





});