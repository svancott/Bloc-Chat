(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref();
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();