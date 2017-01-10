(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		
	
		var createRoom = function() {
			rooms.$add({ room4: "room4" })
		};
		
		
		return {
			all: rooms
			
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', 'ModalCtrl', Room]);
})();