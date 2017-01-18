(function() {
	function Room($firebaseArray, $firebaseObject) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		
	
		var createRoom = function(roomName) {
			rooms.$add({
				name: roomName,
				dateCreated: firebase.database.ServerValue.TIMESTAMP
			});
		};
		
		return {
			all: rooms,
			create: createRoom
		
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', '$firebaseObject', Room]);
})();