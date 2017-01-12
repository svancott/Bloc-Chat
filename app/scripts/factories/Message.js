(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		
		var messages = $firebaseArray(ref);
		
		var getByRoomId = function (roomId) {
				messages.orderByChild("roomId").equalTo(roomId);
		};
		
		return {
			all: messages,
			getByRoomId: getByRoomId
		};
	
		
		
		
		//console.log(ref.orderByChild("roomId").equalTo("-KaHyV1KR0vD9Qyh2ajz");
		
		
		
		
	}
	
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message])
})();