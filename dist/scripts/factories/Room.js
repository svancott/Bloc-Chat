(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		
	
		var createRoom = function(roomName) {
			rooms.$add({ name: roomName, dateCreated: Firebase.ServerValue.TIMESTAMP });
		};
		
		
		return {
			all: rooms,
			create: createRoom
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();