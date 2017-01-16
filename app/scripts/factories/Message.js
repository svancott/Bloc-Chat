(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages")
		
		var messages = $firebaseArray(ref);
		
		var getByRoomId = function(roomId) {
			$firebaseArray(firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId))
			};

		return {
//			getByRoomId: function("room") {
//				$firebaseArray(firebase.database().ref().child("messages").orderByChild("roomId").equalTo("-KaHyV1KR0vD9Qyh2ajz"))
//				
//				console.log("test");
//			},
			getByRoomId: getByRoomId,
			messages: messages
		};
	
		
		
		
		//console.log(ref.orderByChild("roomId").equalTo("-KaHyV1KR0vD9Qyh2ajz");
		
		
		
		
	}
	
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message])
})();