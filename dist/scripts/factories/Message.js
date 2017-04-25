(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages")

		var messages = $firebaseArray(ref);

		var getByRoomId = function(roomId) {

			$firebaseArray(firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId))
			};

		return {
			getByRoomId: getByRoomId,
			messages: messages
		};
	}


	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message])
})();
