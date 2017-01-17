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
		
		var getRoom = function(roomId) {
		
			$firebaseArray(firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId))
			};
		
//		var getRoom = function(roomId) {
//		$firebaseObject(ref.child(roomId))
//		 // ref.child(roomId)
//		};
		return {
			all: rooms,
			create: createRoom,
			getRoom: getRoom
			
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', '$firebaseObject', Room]);
})();